import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierOffreComponent } from './publier-offre.component';

describe('PublierOffreComponent', () => {
  let component: PublierOffreComponent;
  let fixture: ComponentFixture<PublierOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublierOffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublierOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
