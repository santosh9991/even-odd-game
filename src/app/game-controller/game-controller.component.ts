import { Component, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastValue=0;
  constructor() { }

  ngOnInit() {
  }
  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastValue+1);
    this.lastValue++;
    },1000)
    
  }
  onPauseGame(){
    clearInterval(this.interval)   
    
  }
}
