import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TawabComponent } from './tawab.component';

describe('TawabComponent', () => {
  let component: TawabComponent;
  let fixture: ComponentFixture<TawabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TawabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TawabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
