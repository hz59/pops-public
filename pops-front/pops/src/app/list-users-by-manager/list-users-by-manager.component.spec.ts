import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersByManagerComponent } from './list-users-by-manager.component';

describe('ListUsersByManagerComponent', () => {
  let component: ListUsersByManagerComponent;
  let fixture: ComponentFixture<ListUsersByManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersByManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersByManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
