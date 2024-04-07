import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Payment } from '../interfaces/payments';

@Injectable({ providedIn: 'root' })
export class MachineService {
    private apiUrl: string = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getAllPayments(): Observable<Payment[]> {
        const url: string = `${this.apiUrl}payment`;
        return this.http.get<Payment[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }
}