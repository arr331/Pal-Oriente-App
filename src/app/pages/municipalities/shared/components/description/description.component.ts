import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Celebration } from 'src/app/interfaces/celebration';
import { Site } from 'src/app/interfaces/site';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {

  @ViewChild('mySlider')  slides: IonSlides;

  @Input() object: Site | Celebration;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {}

  goToNext(){
    this.slides.slideNext();
  }

  goToBack(){
    this.slides.slidePrev();
  }

}
