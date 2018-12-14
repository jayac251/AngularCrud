import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverejectstudComponent } from './approverejectstud.component';

describe('ApproverejectstudComponent', () => {
  let component: ApproverejectstudComponent;
  let fixture: ComponentFixture<ApproverejectstudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverejectstudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverejectstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
