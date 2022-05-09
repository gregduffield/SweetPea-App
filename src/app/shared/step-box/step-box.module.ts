import { BoxWaveModule } from './../box-wave/box-wave.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepBoxComponent } from './step-box.component';

@NgModule({
  declarations: [StepBoxComponent],
  imports: [CommonModule, BoxWaveModule],
  exports: [StepBoxComponent],
})
export class StepBoxModule {}
