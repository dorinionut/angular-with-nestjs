import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '../../../../../../common/model/character.interface';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-marvel-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class MarvelCharacterDetailsComponent implements OnInit {

  public character: ICharacter;

  constructor(
    private activatedRoute: ActivatedRoute,
    private marvelService: MarvelService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(params => {
        let characterId = params.get('id');

        if(characterId){
          this.marvelService
            .getCharacter(characterId)
            .subscribe(character => this.character = character);
        }
      });
  }

}
