import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  list;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list(`HOME`).valueChanges().subscribe(ans => this.list = ans);
  }

}
