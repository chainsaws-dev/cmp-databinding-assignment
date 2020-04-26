import { Component } from '@angular/core';
import { AttemptOddEven } from './shared/attempt.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AttemptsList: AttemptOddEven[] = [];
  AutoSaveInterval: any;
  WeStart: boolean;
  CurrentNumber = 0;

  OnStartedStoped(WeStart: boolean) {
    if (this.WeStart !== WeStart) {
      this.WeStart = WeStart;
      if (this.WeStart) {
        this.StartGenerating();
      } else {
        this.StopGenerating();
      }
    }
  }

  StartGenerating() {
    this.AutoSaveInterval = setInterval(() => this.GenerateNumber(), 1000);
  }

  GenerateNumber(): void {
    this.CurrentNumber = this.AttemptsList.push(
      new AttemptOddEven(this.CurrentNumber, this.CurrentNumber % 2 !== 0));
  }

  StopGenerating() {
    clearInterval(this.AutoSaveInterval);
  }

  ClearPageList() {
    this.AttemptsList.length = 0;
  }
}
