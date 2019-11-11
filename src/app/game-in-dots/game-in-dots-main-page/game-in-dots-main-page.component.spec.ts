import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInDotsMainPageComponent } from './game-in-dots-main-page.component';

describe('GameInDotsMainPageComponent', () => {
  let component: GameInDotsMainPageComponent;
  let fixture: ComponentFixture<GameInDotsMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameInDotsMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInDotsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
