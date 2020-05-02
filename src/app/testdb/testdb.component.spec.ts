import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdbComponent } from './testdb.component';

describe('TestdbComponent', () => {
  let component: TestdbComponent;
  let fixture: ComponentFixture<TestdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
