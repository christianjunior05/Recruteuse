import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionRecruteurComponent } from './connexion-recruteur.component';

describe('ConnexionRecruteurComponent', () => {
  let component: ConnexionRecruteurComponent;
  let fixture: ComponentFixture<ConnexionRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionRecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
