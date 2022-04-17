import { Component, Input, OnInit } from '@angular/core';
import { ILocationList } from './../../../models/iLocation';

@Component({
  selector: 'app-locations-card',
  templateUrl: './locations-card.component.html',
  styleUrls: ['./locations-card.component.scss']
})
export class LocationsCardComponent implements OnInit {
 @Input() public location!: ILocationList;
  constructor() { }

  ngOnInit(): void {
  }
}
