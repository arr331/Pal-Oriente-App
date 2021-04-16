import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../../../services/information.service';
import { Router } from '@angular/router';
import { InfoItem } from 'src/app/interfaces/info-item';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-item-information',
  templateUrl: './item-information.component.html',
  styleUrls: ['./item-information.component.scss'],
})
export class ItemInformationComponent implements OnInit {
  list = [];

  itemInfo: InfoItem;

  constructor(public navCtrl: NavController, private router:Router) { }

  ngOnInit() {
    this.itemInfo= this.router.getCurrentNavigation().extras.state as InfoItem;
  }

}
