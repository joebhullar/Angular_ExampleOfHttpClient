import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsObservableComponent } from './albums-observable.component';

describe('AlbumsObservableComponent', () => {
  let component: AlbumsObservableComponent;
  let fixture: ComponentFixture<AlbumsObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
