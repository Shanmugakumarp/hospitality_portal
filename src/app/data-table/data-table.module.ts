
import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table.component';
import { DataTableRoutingModule } from './data-table-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    DataTableRoutingModule
  ],
  providers: [],
  bootstrap: [DataTableComponent]
})
export class DataTableModule { }