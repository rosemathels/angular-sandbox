import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TimerWithPipeComponent } from './timer-with-pipe.component'

describe('TimerWithPipeComponent', () => {
  let component: TimerWithPipeComponent;
  let fixture: ComponentFixture<TimerWithPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerWithPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerWithPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('se crée', () => {
    expect(component).toBeTruthy()
  })
})
