import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjoindemoComponent } from './forkjoindemo.component';

describe('ForkjoindemoComponent', () => {
  let component: ForkjoindemoComponent;
  let fixture: ComponentFixture<ForkjoindemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkjoindemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkjoindemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
