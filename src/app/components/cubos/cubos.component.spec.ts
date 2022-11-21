import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubosComponent } from './cubos.component';

describe('CubosComponent', () => {
  let component: CubosComponent;
  let fixture: ComponentFixture<CubosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
