import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-box',
  templateUrl: './step-box.component.html',
  styleUrls: ['./step-box.component.scss'],
})
export class StepBoxComponent implements OnInit {
  constructor() {}
  @Input() color!: string;
  @Input() align = 'text-center';
  @Input() class = '';
  ngOnInit(): void {
    this.class = `${this.class} ${this.color}`;
  }
}
