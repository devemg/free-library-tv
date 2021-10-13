import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitOnAppComponent } from './exit-on-app.component';

describe('ExitOnAppComponent', () => {
  let component: ExitOnAppComponent;
  let fixture: ComponentFixture<ExitOnAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitOnAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitOnAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
