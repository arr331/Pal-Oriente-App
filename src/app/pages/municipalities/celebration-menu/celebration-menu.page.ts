import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celebration-menu',
  templateUrl: './celebration-menu.page.html',
  styleUrls: ['./celebration-menu.page.scss'],
})
export class CelebrationMenuPage implements OnInit {

  celebrations;

  constructor(private router: Router) { }

  ngOnInit() {
    // lista de celebraciones
    this.celebrations = this.router.getCurrentNavigation().extras.state;
  }

}
