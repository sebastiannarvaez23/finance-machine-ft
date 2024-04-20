import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Payment } from '../../interfaces/payment';
import { MonthlyBalance } from '../../interfaces/monthly-balance';

@Injectable({ providedIn: 'root' })
export class PaymentService {
    private apiUrl: string = 'http://localhost:8001/';

    constructor(private http: HttpClient) { }

    getAllPayments(): Observable<Payment[]> {
        const url: string = `${this.apiUrl}payment`;
        return this.http.get<Payment[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }

    getMonthlyBalance(): Observable<MonthlyBalance> {
        const url: string = `${this.apiUrl}payment/pending-amount`;
        return this.http.get<MonthlyBalance>(url)
            .pipe(
                catchError(() => of())
            )
    }

    deletePayment(id: string): Observable<Payment> {
        const url: string = `${this.apiUrl}payment/${id}`;
        return this.http.delete<Payment>(url)
            .pipe(
                catchError(() => of())
            );
    }
}