import { RmsyteService } from './../../../services/rmsyte.service';
import { Component, OnInit } from '@angular/core';
import { IcharacterList } from '../../models/IcharacterList';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characterList: IcharacterList[] = [];

  constructor(private rmsyteService: RmsyteService) { }

  ngOnInit(): void {
    this.recoverList();
  }

  public recoverList() {
    this.rmsyteService.getData('character').subscribe((data: any) => {
      const results: IcharacterList[] = data.results;
      const formattedResults = results.map(({ name, image }) => ({
        name,
        image,
      }));
      this.characterList = formattedResults;
    });
  }
}
