import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {

  loading = true;
  constructor() { }

  ngOnInit() {

    setTimeout(_ => {
      this.loading = false;
    }, 2000);
  }

}
