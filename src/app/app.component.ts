import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers:number[]=[];
  evenNumbers:number[]=[];
  onintervalFired(firedNumber:number){
      if (firedNumber%2==0){
        console.log(firedNumber)
        this.evenNumbers.push(firedNumber)
      }
      else{
        this.oddNumbers.push(firedNumber)
      }
     
  }

}
