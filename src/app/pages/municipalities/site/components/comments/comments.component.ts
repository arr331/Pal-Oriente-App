import { Component, Input, OnInit } from '@angular/core';
import { MunicipalityService } from '../../../../../services/municipality.service';
import { Storage } from '@ionic/storage';
import { Site } from '../../../../../interfaces/site';
import { Comment } from '../../../../../interfaces/comment';
import { AlertController, ModalController, NavParams } from '@ionic/angular';


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
  comentario: string;
  comment: Comment;

  //datos prueba
  uid = 'vsKnoMzL37eUcQwfC3NOCtGvMPJ3';
  imageUser= 'https://lh3.googleusercontent.com/a-/AOh14GgXKO2ENx6r-QIy-h1qF7_9kIj2-88WUDtBAVrMVQ=s96-c';
  stars: 4;
  nameUser: 'Yesid Orrego';

  constructor(private alertCtrl: AlertController, private munService: MunicipalityService, private storage: Storage) { }

  ngOnInit() {


    this.storage.get('ids').then(ids => {
      this.idMun = ids.idMun;
      this.munService.getCom(this.sitio.idSite,this.idMun).valueChanges().subscribe( res =>{
        this.comentarios= res;
        console.log(res);
      });
    });
  }

  createUpdate(){
    this.uid = 'vsKnoMzL37eUcQwfC3NOCtGvMPJ3';
    this.comment.imageUser = this.imageUser;
    this.comment.uid = this.uid;
    this.comment.nameUser = this.nameUser;
    this.munService.saveCom("-MSAlTABuH6K-85lvcqj", this.comment);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
    message: 'Low battery',
    subHeader: '10% of battery remaining',
    buttons: ['Dismiss']
   });
   await alert.present(); 
}


  async presentPrompt() {
    let alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Comentario',
      message: 'Dejanos saber lo que piensas de este sitio',
      inputs: [
        {
          name: 'comentario',
          type: 'textarea',
          placeholder: ''
        },
        ,
        {
          name: 'star1',
          type: 'text',
          placeholder: ''
        },
        {
          name: 'radio2',
          cssClass: 'radios',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
          checked: true
        },
      ],
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          role: 'guardar',
          
          handler: data => {
            console.log('Guardar clicked');
          }
        },
      ]
    });
    await alert.present();
  }


}

