import { Pipe, PipeTransform, NgZone, ChangeDetectorRef } from '@angular/core'
import { DateTime, Duration } from 'luxon'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Pipe({ name: 'timer' })
export class TimerPipe implements PipeTransform {
  constructor (
    private zone: NgZone,
    private changeDetector: ChangeDetectorRef
  ) {}

  transform (date: DateTime): Observable<string> {
    return new Observable((subscriber: any) => this.emettreToutesLesSecondesOutsideAngular(subscriber, this.zone, this.changeDetector))
      .pipe(map(() => this.calculerTempsEcoule(date)))
  }

  emettreToutesLesSecondes (subscriber: any): void {
    subscriber.next()
    setInterval(() => {
      subscriber.next()
    }, 1000)
  }

  emettreToutesLesSecondesOutsideAngular (subscriber: any, zone: NgZone, changeDetector: ChangeDetectorRef): void {
    zone.runOutsideAngular(() => {
      subscriber.next()
      this.changeDetector.detectChanges()
      setInterval(() => {
        subscriber.next()
        this.changeDetector.detectChanges()
      }, 1000)
    })
  }

  calculerTempsEcoule (date: DateTime): string {
    const now: DateTime = DateTime.local()
    const duree: Duration = now.diff(date, ['minutes', 'seconds', 'milliseconds'])
    return `${duree.minutes.toString().padStart(2, '0')}:${duree.seconds.toString().padStart(2, '0')}`
  }

}
