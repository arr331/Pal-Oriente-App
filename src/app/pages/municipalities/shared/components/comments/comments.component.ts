import { Component, Input, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Site } from '../../../../../interfaces/site';
import { Commentary } from '../../../../../interfaces/comment';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { User } from 'src/app/interfaces/user';
import { Celebration } from 'src/app/interfaces/celebration';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'
  ],
})
export class CommentsComponent implements OnInit {
  region: string;
  idMun: string;
  comentarios: Commentary[] = [];
  comment: Commentary;
  user: User;
  activeAdd: boolean;
  @Input() site: Site;
  @Input() celebration: Celebration;

  constructor(
    private storage: Storage,
    private modalController: ModalController,
    private commentService: CommentService,
    public alertController: AlertController
  ) { }

  ngOnInit(): void {
    this.storage.get('ids').then(ids => {
      this.region = ids.region;
      this.idMun = ids.idMun;
      const idSite = this.getCurrentId();
      this.commentService.getAll(this.region, this.idMun, idSite).valueChanges().subscribe(async res => {
        this.comentarios = res;
        this.user = await this.storage.get('user');
        this.activeAdd = !this.comentarios.some(com => com.uid === this.user.uid);
      });
    });
  }

  save(commentary, id: string): void {
    this.comment = {
      uid: this.user.uid,
      imageUser: this.user.photoURL,
      commentary: commentary.commentary,
      idOpinion: id,
      nameUser: this.user.displayName,
      numStars: commentary.numStars
    };
    this.commentService.save(this.comment, this.getCurrentId(), this.region, this.idMun).then().catch(err => console.error(err));
  }

  update(commentary: Commentary): void {
    if (commentary.uid === this.user.uid) { this.presentModal(commentary); }
  }

  async delete(idOpinion: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirma',
      message: '¿Seguro que desea <strong>eliminar</strong> la valoración?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si, Eliminar',
          handler: () => {
            this.commentService.delete(idOpinion, this.getCurrentId(), this.region, this.idMun).then().catch(err => console.error(err));
          }
        }
      ]
    });

    await alert.present();
  }

  async presentModal(input?: Commentary): Promise<void> {
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

  private getCurrentId(): string {
    return this.site ? this.site.idSite : this.celebration ? this.celebration.idCelebration : undefined;
  }

  getProm(): string {
    let promedio = 0;
    this.comentarios.forEach(c => {
      promedio = promedio + c.numStars;
    });
    return (promedio / this.comentarios.length).toFixed(1);
  }
}
