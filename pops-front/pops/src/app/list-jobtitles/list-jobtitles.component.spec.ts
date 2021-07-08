import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobtitlesComponent } from './list-jobtitles.component';

describe('ListJobtitlesComponent', () => {
  let component: ListJobtitlesComponent;
  let fixture: ComponentFixture<ListJobtitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJobtitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobtitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
