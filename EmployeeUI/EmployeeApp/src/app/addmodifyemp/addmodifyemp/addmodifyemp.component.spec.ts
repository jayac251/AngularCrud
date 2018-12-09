import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmodifyempComponent } from './addmodifyemp.component';

describe('AddmodifyempComponent', () => {
  let component: AddmodifyempComponent;
  let fixture: ComponentFixture<AddmodifyempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmodifyempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmodifyempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
