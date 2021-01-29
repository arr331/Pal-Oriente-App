import { Component, Input, OnInit } from '@angular/core';
import { Celebration } from '../../../../../interfaces/celebration';
import { Storage } from '@ionic/storage';
import { MunicipalityService } from '../../../../../services/municipality.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  @Input() celebration: Celebration;
  idMun: string
  comentarios: any[];

  constructor(private storage: Storage, private munService: MunicipalityService) { }

  ngOnInit() {
    this.storage.get('ids').then(ids => {
      this.idMun = ids.idMun;
      this.munService.getCom(this.celebration.idCelebration,this.idMun).valueChanges().subscribe( res =>{
        this.comentarios= res;
        console.log(res);
      });
    });
  }

}
