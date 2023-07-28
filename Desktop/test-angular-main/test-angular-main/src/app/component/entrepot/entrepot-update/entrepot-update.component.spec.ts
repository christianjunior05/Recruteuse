import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepotUpdateComponent } from './entrepot-update.component';

describe('EntrepotUpdateComponent', () => {
  let component: EntrepotUpdateComponent;
  let fixture: ComponentFixture<EntrepotUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepotUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepotUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
