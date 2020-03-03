import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialeventsComponent } from './specialevents.component';

describe('SpecialeventsComponent', () => {
  let component: SpecialeventsComponent;
  let fixture: ComponentFixture<SpecialeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
