import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../../services/information.service';

@Component({
  selector: 'app-menu-information',
  templateUrl: './menu-information.page.html',
  styleUrls: ['./menu-information.page.scss'],
})
export class MenuInformationPage implements OnInit {

  list = [];

  constructor(private informationService: InformationService) { }

  ngOnInit() {
    this.informationService.getInformation().then(res => {
      this.list = res;
    }, err => console.error(err));
  }

}
