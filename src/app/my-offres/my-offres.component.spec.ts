import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOffresComponent } from './my-offres.component';

describe('MyOffresComponent', () => {
  let component: MyOffresComponent;
  let fixture: ComponentFixture<MyOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
