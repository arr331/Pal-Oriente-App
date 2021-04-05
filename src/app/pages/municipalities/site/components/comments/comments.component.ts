import { Component, Input, OnInit } from '@angular/core';
import { MunicipalityService } from '../../../../../services/municipality.service';
import { Storage } from '@ionic/storage';
import { Site } from '../../../../../interfaces/site';
import { Commentary } from '../../../../../interfaces/comment';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'
  ],
})
export class CommentsComponent implements OnInit {
  region: string;
  idMun: string
  comentarios = [];
  comment: Commentary;
  user: User;
  activeAdd: boolean;
  @Input() sitio: Site;

  constructor(private munService: MunicipalityService, private storage: Storage, private modalController: ModalController) { }

  ngOnInit() {
    this.storage.get('ids').then(ids => {
      this.region = ids.region;
      this.idMun = ids.idMun;
      this.munService.getCom(this.sitio.idSite, this.idMun).valueChanges().subscribe(async res => {
        this.comentarios = res;
        this.user = await this.storage.get('user');
        this.activeAdd = !this.comentarios.some(com => com.uid === this.user.uid);
      });
    });
  }

  save(commentary, id: string) {
    this.comment = {
      uid: this.user.uid,
      imageUser: this.user.photoURL,
      commentary: commentary.commentary,
      idOpinion: id,
      nameUser: this.user.displayName,
      numStars: commentary.numStars
    }
    this.munService.saveCom(this.comment, this.sitio.idSite, this.region, this.idMun).then().catch(err => console.log(err));
  }

  update(commentary: Commentary) {
    if (commentary.uid === this.user.uid) { this.presentModal(commentary); }
  }

  delete(idOpinion: string) {
    this.munService.deleteCom(idOpinion, this.sitio.idSite, this.region, this.idMun).then().catch(err => console.log(err));
  }

  async presentModal(input?: Commentary) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      componentProps: { comentario: input }
    });
    modal.onDidDismiss().then(answer => {
      if (answer.data?.delete) {
        this.delete(input.idOpinion);
      } else if (answer.data?.commentary) {
        this.save(answer.data, input ? input.idOpinion : '');
      }
    });
    return await modal.present();
  }
}
