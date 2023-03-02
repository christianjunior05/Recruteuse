import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverEmploiComponent } from './trouver-emploi.component';

describe('TrouverEmploiComponent', () => {
  let component: TrouverEmploiComponent;
  let fixture: ComponentFixture<TrouverEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrouverEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrouverEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
