import { Component, Input, OnInit } from '@angular/core';
import { MunicipalityService } from '../../../../../services/municipality.service';
import { Storage } from '@ionic/storage';
import { Site } from '../../../../../interfaces/site';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  @Input() sitio: Site;
  idMun: string
  comentarios: Array<Comment>;

  constructor(private munService: MunicipalityService, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('ids').then(ids => {
      this.idMun = ids.idMun;
      this.munService.getCom(this.sitio.idSite,this.idMun).valueChanges().subscribe( res =>{
        this.comentarios= res;
        console.log(res);
      });
    });
   
  }

  createUpdate(){
    const com = {a: 'UPDATE', b: 'OTRA'};
    this.munService.saveCom("-MSAlTABuH6K-85lvcqj", com);
  }

}
