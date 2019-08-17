import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterBarangComponent } from './master-barang.component';
import { MasterBarangFormComponent } from './master-barang-form/master-barang-form.component';
import { BarangPersediaanComponent } from './barang-persediaan/barang-persediaan.component';


const routes: Routes = [
  {
    path: 'master-barang',
    component: MasterBarangComponent,
    data: {
      title: 'Master Barang'
    },
  },
  {
    path: 'master-barang/form',
    component: MasterBarangFormComponent,
    data: {
      title: 'Form Master Barang'
    }
  },
  {
    path: 'persediaan',
    component: BarangPersediaanComponent,
    data: {
      title: "Persediaan Barang"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterBarangRoutingModule { }
