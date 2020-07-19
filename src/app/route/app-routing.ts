import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { FormComponent } from './../form/form.component';

const routes: Routes = [
    { path: '', component: FormComponent },
    {
        path: 'table',
        loadChildren: () => import('./../data-table/data-table.module').then(m => m.DataTableModule)
      },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }