import { Component, OnInit } from '@angular/core'
import { Map, View, MapBrowserEvent, Feature } from 'ol'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import { OSM, Vector as VectorSource } from 'ol/source'
import { Point } from 'ol/geom'
import { Circle, Style, Stroke, Fill } from 'ol/style'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  survol = false
  map: Map

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
      const hit = this.map.getFeaturesAtPixel(e.pixel).length > 0
      const target: HTMLElement = e.map.getTargetElement()
      target.style.cursor = hit ? 'pointer' : ''
      this.survol = hit
    })
  }
}
