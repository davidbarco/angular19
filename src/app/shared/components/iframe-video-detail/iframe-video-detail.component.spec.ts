import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeVideoDetailComponent } from './iframe-video-detail.component';

describe('IframeVideoDetailComponent', () => {
  let component: IframeVideoDetailComponent;
  let fixture: ComponentFixture<IframeVideoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeVideoDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeVideoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
