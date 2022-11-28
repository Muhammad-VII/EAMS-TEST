import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickedSupportComponent } from './ticked-support.component';

describe('TickedSupportComponent', () => {
  let component: TickedSupportComponent;
  let fixture: ComponentFixture<TickedSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickedSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickedSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
