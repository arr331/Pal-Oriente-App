import { Component, OnInit } from '@angular/core';
import { MunicipalityService } from 'src/app/services/municipality.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  list = ['https://firebasestorage.googleapis.com/v0/b/palasquesea-e32c0.appspot.com/o/home%2Fbosques.jpg?alt=media&token=e9ce0639-be52-44f2-b40e-8ab6886acc10',
    'https://firebasestorage.googleapis.com/v0/b/palasquesea-e32c0.appspot.com/o/home%2Fembalses.jpg?alt=media&token=7dbdcfa1-5f4e-44d1-954c-3b62c7625ad0',
    'https://firebasestorage.googleapis.com/v0/b/palasquesea-e32c0.appspot.com/o/home%2Fparamo.jpg?alt=media&token=6ea29a11-ea18-43f5-8c89-8da9fbd6a149',
    'https://firebasestorage.googleapis.com/v0/b/palasquesea-e32c0.appspot.com/o/home%2Faltiplano.jpg?alt=media&token=32ab2d28-9a95-43d3-8dbc-8f0617bf980f'];

  constructor(private munService: MunicipalityService) { }

  ngOnInit() {
  }

}
