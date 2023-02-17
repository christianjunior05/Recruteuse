import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMdpComponent } from './new-mdp.component';

describe('NewMdpComponent', () => {
  let component: NewMdpComponent;
  let fixture: ComponentFixture<NewMdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMdpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
