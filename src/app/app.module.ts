import { DecimalPipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MapComponent } from './map/map.component'
import { TimerPipe } from './timer/timer.pipe'
import { TimerComponent } from './timer/timer.component'
import { MapContainerComponent } from './map-container/map-container.component'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapContainerComponent,
    TimerComponent,
    TimerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
