import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-timer-with-pipe',
  templateUrl: './timer-with-pipe.component.html',
  styleUrl: './timer-with-pipe.component.scss'
})
export class TimerWithPipeComponent implements OnInit {
  maintenant: DateTime


  ngOnInit (): void {
    this.maintenant = DateTime.now()
  }
}
