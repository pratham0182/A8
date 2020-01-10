import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmusicsComponent } from './newmusics.component';

describe('NewmusicsComponent', () => {
  let component: NewmusicsComponent;
  let fixture: ComponentFixture<NewmusicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmusicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmusicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
