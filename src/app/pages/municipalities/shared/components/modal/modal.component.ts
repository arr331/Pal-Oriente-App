import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  stars = ['-outline', '-outline', '-outline', '-outline', '-outline'];
  comentarioForm: FormGroup;

  numStars: number;

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.buildForm();
  }

  buildForm() {
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.required],
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  guardar(){
    if(this.comentarioForm.valid && this.numStars>0 && this.numStars<=5){
      let coment= {coment: this.comentarioForm.value['comentario'], num: this.numStars}
      this.modalCtrl.dismiss(coment);
    }
  }

  qualify(index) {
    console.log('puntaje = ', index + 1);
    this.numStars = index+1;
    this.stars = this.stars.map((s, i) => index >= i ? '' : '-outline');
   
  }


}
