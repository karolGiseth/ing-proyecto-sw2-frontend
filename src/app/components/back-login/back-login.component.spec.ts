import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackLoginComponent } from './back-login.component';

describe('BackLoginComponent', () => {
  let component: BackLoginComponent;
  let fixture: ComponentFixture<BackLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
