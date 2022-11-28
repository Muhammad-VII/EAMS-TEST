import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmkComponent } from './jmk.component';

describe('JmkComponent', () => {
  let component: JmkComponent;
  let fixture: ComponentFixture<JmkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
