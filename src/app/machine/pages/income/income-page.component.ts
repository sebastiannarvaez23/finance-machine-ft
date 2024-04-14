import { Component } from '@angular/core';
import { Payment } from '../../interfaces/payment';
import { TableColumn } from 'src/app/shared/interfaces/table-colum';
import { PaymentService } from '../../services/payment/payment.service';
import { Router } from '@angular/router';

@Component({
    selector: 'income-page',
    templateUrl: './income-page.component.html',
    styleUrls: ['./income-page.component.css'],
})
export class IncomePageComponent {

    public payments: Payment[] = [];
    public headersPayments: TableColumn[] = [
        { name: "id", width: "8", type: "string", show: true, relatedToDataColumn: true },
        { name: "Descripción", width: "20", type: "string", show: true, relatedToDataColumn: true },
        { name: "Pago", width: "13", type: "string", show: true, relatedToDataColumn: true },
        { name: "Día pago", width: "13", type: "string", show: true, relatedToDataColumn: true },
        { name: "Link", width: "13", type: "link", show: true, relatedToDataColumn: true },
        { name: "Pagado", width: "13", type: "checkbox", show: true, relatedToDataColumn: true },
        {
            name: "Editar",
            width: "10",
            type: "img",
            show: true,
            relatedToDataColumn: false,
            urlImg: "../assets/imgs/editing.png",
            resource: (id) => alert('Boton editar presionado ' + id)
        },
        {
            name: "Eliminar",
            width: "10",
            type: "img",
            show: true,
            relatedToDataColumn: false,
            urlImg: "../assets/imgs/delete.png",
            resource: (id) => this.deletePayment(id)
        },
    ];

    constructor(
        public paymentService: PaymentService,
        public router: Router
    ) { }

    ngOnInit() {
        this.paymentService.getAllPayments()
            .subscribe((payments) => {
                if (!payments) return this.router.navigateByUrl('');
                return this.payments = payments;
            })
    }

    deletePayment(id: string): void {
        this.paymentService.deletePayment(id).subscribe(() => {
            alert('Pago eliminado correctamente');
            this.paymentService.getAllPayments()
                .subscribe((payments) => {
                    if (!payments) return this.router.navigateByUrl('');
                    return this.payments = payments;
                })
        });
    }
}