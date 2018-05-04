import { Component, Output } from '@angular/core';
import { Keg } from './models/keg.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brewfest';
  header: string = "Brewery Bro's";
  masterKegList: Keg[] = [
    new Keg("Guinness", "Stout", "5.00", "3.8", 124, 3 ),
    new Keg("Newcastle", "Ale", "4.00", "4.0", 124, 2 ),
    new Keg("Yuengling", "Lager", "2.50", "2.5", 124, 1 )
  ];
  selectedKeg = null;

  sellKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    clickedKeg.pints -= 1;
    if(clickedKeg.pints <= 10){
      clickedKeg.brandPriority = 0;
    }
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }
  // editKeg(clickedKeg){
  //   this.selectedKeg = clickedKeg;
  // }
  // finishedEditing(){
  //   this.selectedKeg = null;
  // }
}
