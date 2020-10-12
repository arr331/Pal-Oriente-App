import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MunicipalityService } from 'src/app/services/municipality.service';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.page.html',
  styleUrls: ['./municipality.page.scss'],
})
export class MunicipalityPage implements OnInit {
  listMun = [];

  constructor(private munService: MunicipalityService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.munService.getMunicipios(this.activatedroute.snapshot.paramMap.get('region')).valueChanges().subscribe(ans => this.listMun = ans);
  }
}
