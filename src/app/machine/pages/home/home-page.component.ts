import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../../interfaces/payment.interface';
import { tap } from 'rxjs/operators';
import { TableColumn } from 'src/app/shared/interfaces/table-colum.interface';
import { IncomeService } from '../../services/income/income.service';
import { Income } from '../../interfaces/income.interface';
import { MonthlyBalance } from '../../interfaces/monthly-balance.interface';
import { PaymentService } from '../../services/payment/payment.service';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

    public payments: Payment[] = [];
    public income: Income | null = null;
    public monthlyBalance: MonthlyBalance | null = null;
    public paymentsHeaders: TableColumn[] = [
        { name: "id", width: "8", type: "string", show: true, relatedToDataColumn: true },
        { name: "Descripción", width: "40", type: "string", show: true, relatedToDataColumn: true },
        { name: "Pago", width: "13", type: "string", show: true, relatedToDataColumn: true },
        { name: "Día", width: "13", type: "string", show: true, relatedToDataColumn: true },
        { name: "Link", width: "13", type: "link", show: true, relatedToDataColumn: true },
        { name: "Pagado", width: "13", type: "checkbox", show: true, relatedToDataColumn: true },
    ];

    constructor(
        public incomeService: IncomeService,
        public paymentService: PaymentService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getAllPayments();
        this.getLastIncome();
        this.getMonthlyBalance();
    }

    formatToCurrency(value: number): string {
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
    }

    getAllPayments(): void {
        this.paymentService.getAllPayments()
            .subscribe(
                (payments: Payment[]) => {
                    this.payments = payments;
                },
                (error) => {
                    console.error('Error al obtener los pagos:', error);
                }
            );
    }

    getLastIncome(): void {
        this.incomeService.getLastIncome()
            .subscribe(
                (income) => {
                    if (!income) this.router.navigateByUrl('');
                    else this.income = income;
                },
                (error) => {
                    console.error('Error al obtener los pagos:', error);
                }
            );
    }

    getMonthlyBalance(): void {
        this.paymentService.getMonthlyBalance()
            .subscribe(
                (monthlyBalance) => {
                    if (!monthlyBalance) this.router.navigateByUrl('');
                    else this.monthlyBalance = monthlyBalance;
                },
                (error) => {
                    console.error('Error al obtener los pagos:', error);
                }
            );
    }
}