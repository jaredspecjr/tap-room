import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  header: string = "Brewery Bro's";
  kegs: Keg[] = [
    new Keg("Stout", "Guinness", "$5.00", "ABV: 3.8%" ),
    new Keg("Ale", "Newcastle", "$4.00", "ABV: 4.0%" ),
    new Keg("Lager", "Yuengling", "$2.50", "ABV: 2.5%" )
  ];
  editKeg() {
    alert("Time to edit a keg!");
  }
}
