import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceRecruteurComponent } from './espace-recruteur.component';

describe('EspaceRecruteurComponent', () => {
  let component: EspaceRecruteurComponent;
  let fixture: ComponentFixture<EspaceRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceRecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
