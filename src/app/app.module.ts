import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegSellComponent } from './keg-sell/keg-sell.component';
import { FormsModule } from '@angular/forms';
import { NewKegComponent } from './new-keg/new-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    KegSellComponent,
    NewKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
