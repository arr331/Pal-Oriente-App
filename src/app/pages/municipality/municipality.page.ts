import { Component, OnInit } from '@angular/core';
import { MunicipalityService } from 'src/app/services/municipality.service';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.page.html',
  styleUrls: ['./municipality.page.scss'],
})
export class MunicipalityPage implements OnInit {
  listMun = [];

  constructor(private munService: MunicipalityService) { }

  ngOnInit() {
    this.munService.getMunicipios().valueChanges().subscribe(ans => this.listMun = ans);
  }
}
