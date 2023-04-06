import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRComponent } from './profil-r.component';

describe('ProfilRComponent', () => {
  let component: ProfilRComponent;
  let fixture: ComponentFixture<ProfilRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
