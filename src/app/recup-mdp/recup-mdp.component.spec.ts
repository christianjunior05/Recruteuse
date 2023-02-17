import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupMdpComponent } from './recup-mdp.component';

describe('RecupMdpComponent', () => {
  let component: RecupMdpComponent;
  let fixture: ComponentFixture<RecupMdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecupMdpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecupMdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
