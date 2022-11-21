import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCuboComponent } from './detalles-cubo.component';

describe('DetallesCuboComponent', () => {
  let component: DetallesCuboComponent;
  let fixture: ComponentFixture<DetallesCuboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesCuboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesCuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
