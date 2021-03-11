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
  idMun: string
  comentarios= [];
  rate: number = 2;
  com : Commentary;
  region: string;
  user: any;

  constructor(private alertCtrl: AlertController, private munService: MunicipalityService, private storage: Storage,
              private modalController: ModalController) { }

  ngOnInit() {
    this.storage.get('ids').then(ids => {
      this.idMun = ids.idMun;
      this.munService.getCom(this.celebration.idCelebration,this.idMun).valueChanges().subscribe( res =>{
        this.comentarios= res;
        console.log(res);
      });
    });

    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }

  createUpdate(comentario){
    this.com = {
      uid: this.user.uid,
      imageUser: this.user.photoURL,
      commentary: comentario.coment,
      idOpinion: comentario.id,
      nameUser: this.user.displayName,
      numStars: comentario.num
    }
    console.log(this.com);
    this.munService.saveCom(this.com.idOpinion,this.com, this.celebration.idCelebration, this.region, this.idMun).then(res =>{
        console.log(res);
    }), err=>{
      console.log(err);
    };
  }

  update(comentario: Commentary){
    if(comentario.uid === this.user.uid){
      this.presentModal(comentario);
    }
  }

  async presentModal(comentarioInput?:any) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        comentario: comentarioInput
      }
    });
    modal.onDidDismiss()
      .then((data) => {
      if(data['data']){
        let comentario = data['data']; // Here's your selected user!
        comentario.id = comentarioInput ? comentarioInput.idOpinion : '';
        console.log(comentario);
        this.createUpdate(comentario);
      }
    });
    return await modal.present();
  }


}
