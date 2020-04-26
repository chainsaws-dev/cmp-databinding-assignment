import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() OnStartStopEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() OnClearEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  OnStartStopClick(WeStart: boolean): void {
    this.OnStartStopEvent.emit(WeStart);
  }

  OnClearClick() {
    this.OnClearEvent.emit();
  }

}
