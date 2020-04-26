import { Component, OnInit, Input } from '@angular/core';
import { AttemptOddEven } from '../shared/attempt.model';

@Component({
  selector: 'app-odd-even',
  templateUrl: './odd-even.component.html',
  styleUrls: ['./odd-even.component.css']
})
export class OddEvenComponent implements OnInit {
  @Input() OddEvenCl: AttemptOddEven;
  ClassNameBootstrap: string;
  AttemptNumber: number;
  OddEvenText: string;

  constructor() { }

  ngOnInit(): void {
    if (this.OddEvenCl.isodd) {
      this.OddEvenText = 'Odd!';
      this.ClassNameBootstrap = 'badge badge-primary badge-pill';
    } else {
      this.OddEvenText = 'Even!';
      this.ClassNameBootstrap = 'badge badge-success badge-pill';
    }
    this.AttemptNumber = this.OddEvenCl.attempt;

  }

}
