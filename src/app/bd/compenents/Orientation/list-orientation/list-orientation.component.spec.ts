import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrientationComponent } from './list-orientation.component';

describe('ListOrientationComponent', () => {
  let component: ListOrientationComponent;
  let fixture: ComponentFixture<ListOrientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
