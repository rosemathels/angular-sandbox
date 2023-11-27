import { Component, NgZone, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core'
import { Map, View, MapBrowserEvent, Feature } from 'ol'
import { Point } from 'ol/geom'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import { OSM, Vector as VectorSource } from 'ol/source'
import { Circle, Style, Stroke, Fill } from 'ol/style'

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrl: './map-container.component.scss'
})
export class MapContainerComponent implements OnInit, AfterViewChecked {
  hovered = false
  map: Map

  constructor(
    private zone: NgZone,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit (): void {
    this.map = new Map({
      view: new View({ center: [0, 0], zoom: 1 }),
      layers: [
        new TileLayer({ source: new OSM() }),
        new VectorLayer({
          source: new VectorSource({
            features: [
              new Feature(new Point([2000000, 0])),
              new Feature(new Point([0, 0])),
              new Feature(new Point([2000000, 3000000])),
              new Feature(new Point([-2000000, 3000000])),
            ]
          }),
          style: new Style({
            image: new Circle({
              radius: 20,
              stroke: new Stroke({ color: 'black', width: 3 }),
              fill: new Fill({ color: 'white' })
            })
          })
        })
      ]
    })

    this.map.on('pointermove', (e: MapBrowserEvent<UIEvent>) => {
      const hovered = this.map.getFeaturesAtPixel(e.pixel).length > 0

      const target: HTMLElement = e.map.getTargetElement()
      target.style.cursor = hovered ? 'pointer' : '' // Angular doesn't need to know this...

      if (this.hovered !== hovered) {
        this.hovered = hovered // ... but it needs to know that because it is referenced in the template
        this.changeDetector.detectChanges()
      }
    })
  }

  ngAfterViewChecked (): void {
    console.log('View checked !')
  }
}
