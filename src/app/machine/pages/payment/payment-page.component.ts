import { Component } from '@angular/core';
import { Payment } from '../../interfaces/payment';
import { TableColumn } from 'src/app/shared/interfaces/table-colum';
import { Router } from '@angular/router';
import { PaymentFacadeService } from '../../services/payment/facade.service';

@Component({
    selector: 'payment-page',
    templateUrl: './payment-page.component.html',
    styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent {

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
        public paymentFacadeService: PaymentFacadeService,
        public router: Router
    ) { }

    ngOnInit() {
        this.getAllPayments();
    }

    getAllPayments() {
        this.paymentFacadeService.getAllPayments().subscribe(
            (payments) => {
                this.payments = payments;
            },
            (error) => {
                alert('Error al obtener los pagos: ' + error);
                this.router.navigateByUrl('/error');
            }
        );
    }

    deletePayment(id: string): void {
        this.paymentFacadeService.deletePayment(id).subscribe(
            () => {
                // Recargar la lista de pagos después de eliminar
                this.getAllPayments();
                alert('Pago eliminado correctamente');
            },
            (error) => {
                alert('Error al eliminar el pago: ' + error);
                this.router.navigateByUrl('/error');
            }
        );
    }
}