import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  stars = ['-outline', '-outline', '-outline', '-outline', '-outline'];
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    alert(this.firstName);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  qualify(index) {
    console.log('puntaje = ', index + 1);
    this.stars = this.stars.map((s, i) => index >= i ? '' : '-outline')
  }
}
