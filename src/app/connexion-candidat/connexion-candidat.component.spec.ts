import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionCandidatComponent } from './connexion-candidat.component';

describe('ConnexionCandidatComponent', () => {
  let component: ConnexionCandidatComponent;
  let fixture: ComponentFixture<ConnexionCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
