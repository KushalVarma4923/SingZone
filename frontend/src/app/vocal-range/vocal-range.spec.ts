import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocalRange } from './vocal-range';

describe('VocalRange', () => {
  let component: VocalRange;
  let fixture: ComponentFixture<VocalRange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocalRange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocalRange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
