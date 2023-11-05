import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CafeListComponent } from './cafe-list.component';
import { CafeService } from '../cafe.service';
import { cafes } from '../cafe.dummy';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CafeListComponent],
      providers: [CafeService],
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    component.cafes = cafes;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  afterEach(() => {
    component.cafes = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

