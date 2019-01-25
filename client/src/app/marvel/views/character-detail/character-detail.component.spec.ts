import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharacterDetailsComponent } from './character-detail.component';

describe('MarvelCharacterDetailComponent', () => {
  let component: MarvelCharacterDetailsComponent;
  let fixture: ComponentFixture<MarvelCharacterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelCharacterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
