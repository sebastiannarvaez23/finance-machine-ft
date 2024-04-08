import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';
import { Payment } from '../../interfaces/payment';
import { IncomeService } from '../../services/income.service';
import { Income } from '../../interfaces/income';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

    public payments: Payment[] = [];
    public income: Income | null = null;

    constructor(
        public paymentService: PaymentService,
        public incomeService: IncomeService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.paymentService.getAllPayments()
            .subscribe((payments) => {
                if (!payments) return this.router.navigateByUrl('');
                return this.payments = payments;
            })

        this.incomeService.getLastIncome()
            .pipe(
                tap((income) => {
                    if (!income) this.router.navigateByUrl('');
                    else this.income = income;
                })
            )
            .subscribe();
    }

    formatToCurrency(value: number): string {
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
    }
}