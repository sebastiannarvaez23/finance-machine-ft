import { Injectable } from "@angular/core";
import { Payment } from '../../interfaces/payment';
import { PaymentService } from "./payment.service";
import { Router } from "@angular/router";
import { EMPTY, Observable, catchError, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PaymentFacadeService {

    constructor(
        private paymentService: PaymentService,
        public router: Router
    ) { }

    getAllPayments(): Observable<Payment[]> {
        return this.paymentService.getAllPayments()
            .pipe(
                catchError((error) => {
                    console.error('Error al obtener los pagos:', error);
                    return throwError(error);
                })
            );
    }

    deletePayment(id: string): Observable<Payment> {
        return this.paymentService.deletePayment(id).pipe(
            catchError((error) => {
                console.error('Error al eliminar el pago:', error);
                return EMPTY;
            })
        );
    }
}