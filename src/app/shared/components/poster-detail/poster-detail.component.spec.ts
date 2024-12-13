import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterDetailComponent } from './poster-detail.component';

describe('PosterDetailComponent', () => {
  let component: PosterDetailComponent;
  let fixture: ComponentFixture<PosterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
