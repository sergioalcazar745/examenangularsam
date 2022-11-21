import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPedidoComponent } from './insertar-pedido.component';

describe('InsertarPedidoComponent', () => {
  let component: InsertarPedidoComponent;
  let fixture: ComponentFixture<InsertarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
