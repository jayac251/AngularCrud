import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverejectempComponent } from './approverejectemp.component';

describe('ApproverejectempComponent', () => {
  let component: ApproverejectempComponent;
  let fixture: ComponentFixture<ApproverejectempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverejectempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverejectempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
