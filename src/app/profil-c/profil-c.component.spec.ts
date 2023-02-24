import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCComponent } from './profil-c.component';

describe('ProfilCComponent', () => {
  let component: ProfilCComponent;
  let fixture: ComponentFixture<ProfilCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
