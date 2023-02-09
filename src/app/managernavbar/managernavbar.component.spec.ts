import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagernavbarComponent } from './managernavbar.component';

describe('ManagernavbarComponent', () => {
  let component: ManagernavbarComponent;
  let fixture: ComponentFixture<ManagernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagernavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
