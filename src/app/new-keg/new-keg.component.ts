import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
  export class NewKegComponent {
    @Output() sendKeg = new EventEmitter();
    submitForm(brand: string, name: string, price: string, content: string){
      let newKeg: Keg = new Keg(brand, name, price, content, 124, 4);
      this.sendKeg.emit(newKeg);
    }
  }
