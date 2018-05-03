import { Component } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  kegs: Keg[] = [
    new Keg("Guinness", "Stout", "$5.00", "ABV: 3.8%", 124, 3 ),
    new Keg("Newcastle", "Ale", "$4.00", "ABV: 4.0%", 124, 2 ),
    new Keg("Yuengling", "Lager", "$2.50", "ABV: 2.5%", 124, 1 )
  ];
  selectedKeg: Keg = this.kegs[0];
  sellKeg(clickedKeg) {
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
