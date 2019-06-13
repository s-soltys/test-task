export class Invoice {

    date: Date;
    subject: string;
    bank: string;
    account: string;
    amount: number;

    constructor(date, subject, bank, amount){
        this.date = date;
        this.subject = subject;
        this.amount = amount;
        console.log(typeof bank);
        if(bank === "on") {
            this.account = "DE01 0203 0405 0608";
        }
    }
}