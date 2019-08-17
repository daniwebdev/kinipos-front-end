import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KasirRoutingModule } from './kasir.routing';
import { KasirComponent } from './kasir.component';


@NgModule({
  declarations: [
    KasirComponent
  ],
  imports: [
    CommonModule,
    KasirRoutingModule
  ]
})
export class KasirModule { }
