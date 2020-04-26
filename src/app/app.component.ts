import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  WeStart: boolean;

  OnStartedStoped(WeStart: boolean) {
    if (this.WeStart !== WeStart) {
      this.WeStart = WeStart;
      if(this.WeStart) {
        this.StartGenerating();
      } else {
        this.StopGenerating();
      }
    }
  }

  StartGenerating() {

  }

  StopGenerating() {

  }
}
