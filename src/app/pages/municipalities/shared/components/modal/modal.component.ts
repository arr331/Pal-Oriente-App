import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Commentary } from '../../../../../interfaces/comment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  commentForm: FormGroup;
  @Input() comentario: Commentary;

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    if (this.comentario) { this.commentForm.patchValue(this.comentario); }
  }

  buildForm() {
    this.commentForm = this.formBuilder.group({
      commentary: ['', Validators.required],
      numStars: [0, Validators.required]
    });
  }

  close(action: string): void {
    this.modalCtrl.dismiss({ [action]: true });
  }

  save() {
    if (this.commentForm.valid) { this.modalCtrl.dismiss(this.commentForm.value); }
  }

  get numStarField() { return this.commentForm.get('numStars').value; }
  set numStarField(value: number) { this.commentForm.get('numStars').setValue(value); }

}
