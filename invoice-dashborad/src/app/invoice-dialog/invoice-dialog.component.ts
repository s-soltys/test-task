import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit {

  invoice;
  showPayment = true;

  constructor(private dataService : DataServiceService) { 
  }

  ngOnInit() {
    this.invoice = this.dataService.invoices;
  }

  invoiceData(date, subject, bank, amount) {
    this.dataService.addInvoice(date,subject, bank, amount);
  }

}
