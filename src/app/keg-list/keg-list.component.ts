import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  // selectedKeg: Keg = this.childKegList[0];
  sellButtonClicked(clickedKeg) {
    this.selectedKeg = clickedKeg;
    clickedKeg.pints -= 1;
    if(clickedKeg.pints <= 10){
      clickedKeg.brandPriority = 0;
    }
    console.log(clickedKeg.pints);
  }
  brandPriorityColor(currentKeg){
    if (currentKeg.brandPriority === 3){
      return "bg-success";
    } else if (currentKeg.brandPriority === 2){
      return "bg-warning";
    } else if (currentKeg.brandPriority === 1){
      return "bg-info";
    } else {
      return "bg-danger";
    }
  }
}
