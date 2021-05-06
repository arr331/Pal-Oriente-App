import { Component, OnInit } from '@angular/core';
import { InfoItem } from 'src/app/interfaces/info-item';
import { InformationService } from '../../../services/information.service';

@Component({
  selector: 'app-menu-information',
  templateUrl: './menu-information.page.html',
  styleUrls: ['./menu-information.page.scss'],
})
export class MenuInformationPage implements OnInit {
  infoList: InfoItem[] = [];

  constructor(private informationService: InformationService) { }

  ngOnInit() {
    this.informationService.getInformation().valueChanges().subscribe(res => this.infoList = res, err => console.error(err));
  }

}
