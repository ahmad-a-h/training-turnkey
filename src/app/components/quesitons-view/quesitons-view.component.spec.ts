import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesitonsViewComponent } from './quesitons-view.component';

describe('QuesitonsViewComponent', () => {
  let component: QuesitonsViewComponent;
  let fixture: ComponentFixture<QuesitonsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesitonsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesitonsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
