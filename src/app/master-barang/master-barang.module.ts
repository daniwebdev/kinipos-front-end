import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterBarangRoutingModule } from './master-barang-routing.module';
import { MasterBarangComponent } from './master-barang.component';
import { MasterBarangFormComponent } from './master-barang-form/master-barang-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarangPersediaanComponent } from './barang-persediaan/barang-persediaan.component';


@NgModule({
  declarations: [
    MasterBarangComponent,
    MasterBarangFormComponent,
    BarangPersediaanComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MasterBarangRoutingModule
  ]
})
export class MasterBarangModule { }
