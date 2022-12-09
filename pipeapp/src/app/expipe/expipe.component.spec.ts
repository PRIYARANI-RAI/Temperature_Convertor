import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpipeComponent } from './expipe.component';

describe('ExpipeComponent', () => {
  let component: ExpipeComponent;
  let fixture: ComponentFixture<ExpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
