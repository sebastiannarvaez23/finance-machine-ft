import { Component, Input } from "@angular/core";
import { Payment } from "../../interfaces/payment.interface";

@Component({
    selector: 'machine-form-payment',
    templateUrl: './form-payment.component.html',
    styleUrls: ['./form-payment.component.css'],
})
export class FormPaymentComponent {
    @Input() data: Payment = {
        paid: false,
        description: "",
        payment: 0,
        payday: "",
        paymentlink: ""
    };
    @Input() lblBtnSend: string = "";
}
