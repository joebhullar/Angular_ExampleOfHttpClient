import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsObservableComponent } from './comments-observable.component';

describe('CommentsObservableComponent', () => {
  let component: CommentsObservableComponent;
  let fixture: ComponentFixture<CommentsObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
