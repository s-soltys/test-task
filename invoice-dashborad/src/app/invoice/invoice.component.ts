import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice;

  constructor(private dataService : DataServiceService) { 
  }

  ngOnInit() {
    this.invoice = this.dataService.invoices;
  }

  deleteInvoice(invoice) {
    this.dataService.removeInvoice(invoice);
  }

}
