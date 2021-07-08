import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserElementComponent } from './list-user-element.component';

describe('ListUserElementComponent', () => {
  let component: ListUserElementComponent;
  let fixture: ComponentFixture<ListUserElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
