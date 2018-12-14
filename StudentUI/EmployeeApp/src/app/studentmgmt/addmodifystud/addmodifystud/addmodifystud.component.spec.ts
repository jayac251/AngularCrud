import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmodifystudComponent } from './addmodifystud.component';

describe('AddmodifystudComponent', () => {
  let component: AddmodifystudComponent;
  let fixture: ComponentFixture<AddmodifystudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmodifystudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmodifystudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
