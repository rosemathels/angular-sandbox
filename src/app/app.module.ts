import { DecimalPipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MapComponent } from './map/map.component'
import { TimerComponent } from './timer/timer.component'
import { TimerPipe } from './timer-with-pipe/timer.pipe'
import { TimerWithPipeComponent } from './timer-with-pipe/timer-with-pipe.component'
import { MapContainerComponent } from './map-container/map-container.component'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapContainerComponent,
    TimerComponent,
    TimerWithPipeComponent,
    TimerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
