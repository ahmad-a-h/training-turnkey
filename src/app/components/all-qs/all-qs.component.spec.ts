import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQsComponent } from './all-qs.component';

describe('AllQsComponent', () => {
  let component: AllQsComponent;
  let fixture: ComponentFixture<AllQsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllQsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
