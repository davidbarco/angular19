import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsRegisterComponent } from './sessions-register.component';

describe('SessionsRegisterComponent', () => {
  let component: SessionsRegisterComponent;
  let fixture: ComponentFixture<SessionsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
