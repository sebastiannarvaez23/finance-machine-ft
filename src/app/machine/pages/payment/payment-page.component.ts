import { Component } from '@angular/core';
import { Payment } from '../../interfaces/payment.interface';
import { TableColumn } from 'src/app/shared/interfaces/table-colum.interface';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment/payment.service';

@Component({
    selector: 'payment-page',
    templateUrl: './payment-page.component.html',
    styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent {

    public payments: Payment[] = [];
    dataEditForm: Payment = {
        paid: false,
        description: "",
        payment: 0,
        payday: "",
        paymentlink: ""
    };
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
            resource: (data) => this.openEditModal(data)
        },
        {
            name: "Eliminar",
            width: "10",
            type: "img",
            show: true,
            relatedToDataColumn: false,
            urlImg: "../assets/imgs/delete.png",
            resource: (data) => this.deletePayment(data.id)
        },
    ];

    /* Variables Modals */

    isEditModalVisible: boolean = false;
    isAddModalVisible: boolean = false;

    constructor(
        public paymentService: PaymentService,
        public router: Router
    ) { }

    ngOnInit() {
        this.getAllPayments();
    }

    getAllPayments() {
        this.paymentService.getAllPayments()
            .subscribe(
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
        this.paymentService.deletePayment(id)
            .subscribe(
                () => {
                    this.getAllPayments();
                    alert('Pago eliminado correctamente');
                },
                (error) => {
                    alert('Error al eliminar el pago: ' + error);
                    this.router.navigateByUrl('/error');
                }
            );
    }

    // Functions Modals

    openEditModal(data: Payment) {
        this.dataEditForm = data;
        this.isEditModalVisible = true;
    }

    closeEditModal() {
        this.isEditModalVisible = false;
    }

    openAddModal() {
        this.isAddModalVisible = true;
    }

    closeAddModal() {
        this.isAddModalVisible = false;
    }
}