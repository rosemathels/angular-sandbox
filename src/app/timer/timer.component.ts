import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit, OnDestroy {
  time = 0
  interval: any

  constructor (
    private zone: NgZone,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit (): void {
    // this.initialiserTimerNormalement()
    this.initialiserTimerOutsideAngular()
  }

  initialiserTimerNormalement (): void {
    this.interval = setInterval(() => {
      this.time++
    }, 1000)
  }

  initialiserTimerOutsideAngular (): void {
    this.zone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.time++
        this.changeDetector.detectChanges()
      }, 1000)
    })
  }

  ngOnDestroy (): void {
    clearInterval(this.interval)
  }
}
