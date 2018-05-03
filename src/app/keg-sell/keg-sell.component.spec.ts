import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegSellComponent } from './keg-sell.component';

describe('KegSellComponent', () => {
  let component: KegSellComponent;
  let fixture: ComponentFixture<KegSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
