import { ILocationList } from './../../models/iLocation';
import { Component, OnInit } from '@angular/core';
import { RmsyteService } from 'src/app/pages/services/rmsyte.service';


@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {

  public locations: ILocationList[]=[];

  constructor(private rmsyteService: RmsyteService) { }

  ngOnInit(): void {
    this.recoverLocations();
  }

  public recoverLocations(){
    this.rmsyteService.getData('Location').subscribe((data:any)=>{
      const results: ILocationList[] = data.results;
      const formatedLocationResults = results.map(({name, type, dimension})=>({
        name,
        type,
        dimension,
      }));
      this.locations=formatedLocationResults;
    })
  }

}