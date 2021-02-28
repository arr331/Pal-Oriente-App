import { Component, Input, OnInit } from '@angular/core';
import { MunicipalityService } from '../../../../../services/municipality.service';
import { Storage } from '@ionic/storage';
import { Site } from '../../../../../interfaces/site';
import { Commentary } from '../../../../../interfaces/comment';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { ModalComponent } from '../../../shared/components/modal/modal.component';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'
],
})
export class CommentsComponent implements OnInit {

  @Input() sitio: Site;
  idMun: string
  comentarios = [];
  rate: number = 2;
  com : Commentary;
  region: string;


  //datos prueba
  uid = 'vsKnoMzL37eUcQwfC3NOCtGvMPJ3';
  imageUser = 'https://lh3.googleusercontent.com/a-/AOh14GgXKO2ENx6r-QIy-h1qF7_9kIj2-88WUDtBAVrMVQ=s96-c';
  nameUser = 'Yesid Orrego';

  constructor(private alertCtrl: AlertController, private munService: MunicipalityService, private storage: Storage,
              private modalController: ModalController) { }

  ngOnInit() {
    this.storage.get('ids').then(ids => {
      this.idMun = ids.idMun;
      this.region = ids.region;
      this.munService.getCom(this.sitio.idSite,this.idMun).valueChanges().subscribe( res =>{
        this.comentarios= res;
        console.log(res);
      });
    });
    console.log(localStorage.getItem('user'));
  }

  createUpdate(comentario){
    //this.uid = 'vsKnoMzL37eUcQwfC3NOCtGvMPJ3';
    this.com = {
      uid: this.uid,
      imageUser: this.imageUser,
      commentary: comentario.coment,
      idOpinion: '',
      nameUser: this.nameUser,
      numStars: comentario.num
    }
    console.log(this.com);
    this.munService.saveCom('',this.com, this.sitio.idSite, this.region, this.idMun).then(res =>{
        console.log(res);
    }), err=>{
      console.log(err);
    };
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    modal.onDidDismiss()
      .then((data) => {
      let comentario = data['data']; // Here's your selected user!
      console.log(comentario);
      this.createUpdate(comentario);
    });
    return await modal.present();
  }

}

