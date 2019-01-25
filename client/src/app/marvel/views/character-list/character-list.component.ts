import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { ICharacter } from '../../../../../../common/model/character.interface';

@Component({
  selector: 'app-marvel',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class MarvelCharacterListComponent implements OnInit {
  public characters: ICharacter[];

  constructor(
    private marvelService: MarvelService
  ) { }

  ngOnInit() {
    this.marvelService
      .getCharacters()
      .subscribe(characters => this.characters = characters);
  }

}
