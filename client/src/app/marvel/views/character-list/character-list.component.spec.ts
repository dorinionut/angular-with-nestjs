import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharacterListComponent } from './character-list.component';

describe('MarvelComponent', () => {
  let component: MarvelCharacterListComponent;
  let fixture: ComponentFixture<MarvelCharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelCharacterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
