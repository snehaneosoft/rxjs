import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapdemoComponent } from './switchmapdemo.component';

describe('SwitchmapdemoComponent', () => {
  let component: SwitchmapdemoComponent;
  let fixture: ComponentFixture<SwitchmapdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchmapdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchmapdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
