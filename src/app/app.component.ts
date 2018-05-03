import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brewfest';
  header: string = "Brewery Bro's";
  selectedKeg: Keg = this.childKegList[0];
  masterKegList: Keg[] = [
    new Keg("Guinness", "Stout", "$5.00", "ABV: 3.8%", 124, 3 ),
    new Keg("Newcastle", "Ale", "$4.00", "ABV: 4.0%", 124, 2 ),
    new Keg("Yuengling", "Lager", "$2.50", "ABV: 2.5%", 124, 1 )
  ];

  sellKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    clickedKeg.pints -= 1;
  }
}
