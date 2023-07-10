import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapdemoComponent } from './tapdemo.component';

describe('TapdemoComponent', () => {
  let component: TapdemoComponent;
  let fixture: ComponentFixture<TapdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
