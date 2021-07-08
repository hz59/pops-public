import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobtitleComponent } from './add-jobtitle.component';

describe('AddJobtitleComponent', () => {
  let component: AddJobtitleComponent;
  let fixture: ComponentFixture<AddJobtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
