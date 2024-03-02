import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestsComponent } from './view-tests.component';

describe('ViewTestComponent', () => {
  let component: ViewTestsComponent;
  let fixture: ComponentFixture<ViewTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
