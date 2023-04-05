import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEmploiComponent } from './recherche-emploi.component';

describe('RechercheEmploiComponent', () => {
  let component: RechercheEmploiComponent;
  let fixture: ComponentFixture<RechercheEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
