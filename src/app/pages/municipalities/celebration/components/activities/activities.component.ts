import { Component, Input, OnInit } from '@angular/core';
import { Celebration } from '../../../../../interfaces/celebration';
import { Activity } from '../../../../../interfaces/activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {

  @Input() celebration: Celebration;

  activities : Activity[];
  constructor() { }

  ngOnInit() {
    this.activities= Object.values(this.celebration.activities);
  }

}
