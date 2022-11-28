import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTicketComponent } from './it-ticket.component';

describe('ItTicketComponent', () => {
  let component: ItTicketComponent;
  let fixture: ComponentFixture<ItTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
