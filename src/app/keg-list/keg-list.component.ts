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

  sellButtonClicked(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }
  brandPriorityColor(currentKeg){
    if (currentKeg.brandPriority === 3){
      return "bg-success";
    } else if (currentKeg.brandPriority === 2){
      return "bg-warning";
    } else if (currentKeg.brandPriority === 1){
      return "bg-info";
    } else if (currentKeg.brandPriority === 0){
      return "bg-danger";
    }
  }
}
