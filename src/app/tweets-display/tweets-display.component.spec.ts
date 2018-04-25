import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsDisplayComponent } from './tweets-display.component';

describe('TweetsDisplayComponent', () => {
  let component: TweetsDisplayComponent;
  let fixture: ComponentFixture<TweetsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
