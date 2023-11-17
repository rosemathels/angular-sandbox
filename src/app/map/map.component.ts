import { Component, OnInit, Input, ElementRef, NgZone } from '@angular/core'
import { Map } from 'ol'

@Component({
  selector: 'app-map',
  template: '',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  @Input() map: Map

  constructor (
    private elementRef: ElementRef
  ) {}

  ngOnInit (): void {
    this.map.setTarget(this.elementRef.nativeElement)
  }
}
