import { Component, Input, OnInit } from '@angular/core';
import { Celebration } from '../../../../../interfaces/celebration';
import { Storage } from '@ionic/storage';
import { MunicipalityService } from '../../../../../services/municipality.service';
import { Commentary } from 'src/app/interfaces/comment';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  @Input() celebration: Celebration;
  idMun: string;
  comentarios = [];
  rate = 2;
  com: Commentary;
  region: string;
  user: any;
  activeAdd: boolean;

  constructor(private munService: MunicipalityService, private storage: Storage,
              private modalController: ModalController) { }

  ngOnInit() {
    this.storage.get('ids').then(ids => {
      this.idMun = ids.idMun;
      this.region = ids.region;
      this.munService.getCom(this.celebration.idCelebration, this.idMun).valueChanges().subscribe(async res => {
        this.comentarios = res;
        this.user = await this.storage.get('user');
        this.activeAdd = !this.comentarios.some(com => com.uid === this.user.uid);
      });
    });
  }

  save(commentary, id: string) {
    this.com = {
      uid: this.user.uid,
      imageUser: this.user.photoURL,
      commentary: commentary.commentary,
      idOpinion: id,
      nameUser: this.user.displayName,
      numStars: commentary.numStars
    };
    this.munService.saveCom(this.com, this.celebration.idCelebration, this.region, this.idMun).then().catch(err => console.error(err));
  }

  update(comentario: Commentary) {
    if (comentario.uid === this.user.uid) {
      this.presentModal(comentario);
    }
  }

  delete(idOpinion: string) {
    this.munService.deleteCom(idOpinion, this.celebration.idCelebration, this.region, this.idMun).then().catch(err => console.error(err));
  }

  async presentModal(input?: any) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        comentario: input
      }
    });
    modal.onDidDismiss()
      .then((answer) => {
        if (answer.data?.delete) {
          this.delete(input.idOpinion);
        } else if (answer.data?.commentary) {
          this.save(answer.data, input ? input.idOpinion : '');
        }
      });
    return await modal.present();
  }
}
