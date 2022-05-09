import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWaveComponent } from './box-wave.component';

describe('BoxWaveComponent', () => {
  let component: BoxWaveComponent;
  let fixture: ComponentFixture<BoxWaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxWaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
