import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[NavBarComponent]
})
export class SharedModule { }
