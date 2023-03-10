import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreportsComponent } from './userreports.component';

describe('UserreportsComponent', () => {
  let component: UserreportsComponent;
  let fixture: ComponentFixture<UserreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
