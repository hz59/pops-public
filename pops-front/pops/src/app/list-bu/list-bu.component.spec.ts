import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuComponent } from './list-bu.component';

describe('ListBuComponent', () => {
  let component: ListBuComponent;
  let fixture: ComponentFixture<ListBuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
