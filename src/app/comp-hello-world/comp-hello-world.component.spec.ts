import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHelloWorldComponent } from './comp-hello-world.component';

describe('CompHelloWorldComponent', () => {
  let component: CompHelloWorldComponent;
  let fixture: ComponentFixture<CompHelloWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompHelloWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
