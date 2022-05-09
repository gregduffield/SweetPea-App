import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-wave',
  templateUrl: './box-wave.component.html',
  styleUrls: ['./box-wave.component.scss'],
})
export class BoxWaveComponent implements OnInit {
  constructor() {}
  @Input() color!: string;
  @Input() position!: string;
  @Input() class: string = '';
  imageSrc!: string;
  ngOnInit(): void {
    this.imageSrc = `../../../../assets/images/${this.color}-bg-${this.position}.png`;
  }
}
