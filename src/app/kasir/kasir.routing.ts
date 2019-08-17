import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { KasirComponent } from './kasir.component';

export const routes: Routes = [
    {
        path: '',
        component: KasirComponent,
        data: {
            title: 'Kasir'
        }
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class KasirRoutingModule {}
  