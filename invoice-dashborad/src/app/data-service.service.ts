import { Injectable } from '@angular/core';
import { Invoice } from './invoices';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  invoices: Array<Invoice>;

  constructor(private router: Router) { 
    this.invoices = [];
  }

   addInvoice(date, subject, bank, amount){
    let invoice = new Invoice(date, subject, bank, amount);
    this.invoices.push(invoice);
    this.router.navigate(['/']);
}

    removeInvoice(invoice){
      let index = this.invoices.indexOf(invoice);
      this.invoices.splice(index,1);
    }

}
