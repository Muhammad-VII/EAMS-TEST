import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatReqComponent } from './chat-req.component';

describe('ChatReqComponent', () => {
  let component: ChatReqComponent;
  let fixture: ComponentFixture<ChatReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
