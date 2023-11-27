import { Component, OnInit, Input, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core'
import { Map } from 'ol'

@Component({
  selector: 'app-map',
  template: '',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  @Input() map: Map

  constructor (
    private elementRef: ElementRef,
    private zone: NgZone
  ) {}

  ngOnInit (): void {
    this.zone.runOutsideAngular(() => {
      this.map.setTarget(this.elementRef.nativeElement)
    })
  }
}
