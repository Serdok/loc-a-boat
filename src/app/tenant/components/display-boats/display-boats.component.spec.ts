import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoatsComponent } from './display-boats.component';

describe('DisplayBoatsComponent', () => {
  let component: DisplayBoatsComponent;
  let fixture: ComponentFixture<DisplayBoatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayBoatsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
