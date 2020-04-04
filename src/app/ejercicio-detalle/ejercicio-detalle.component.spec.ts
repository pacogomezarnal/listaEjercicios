import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioDetalleComponent } from './ejercicio-detalle.component';

describe('EjercicioDetalleComponent', () => {
  let component: EjercicioDetalleComponent;
  let fixture: ComponentFixture<EjercicioDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
