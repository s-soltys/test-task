import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceDialogComponent } from './invoice-dialog/invoice-dialog.component';

const routes: Routes = [
  {path : '', component: InvoiceComponent },
  {path : 'new-invoice', component: InvoiceDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
