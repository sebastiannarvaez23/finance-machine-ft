import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Income } from '../../interfaces/income';

@Injectable({ providedIn: 'root' })
export class IncomeService {
    private apiUrl: string = 'http://localhost:8002/';

    constructor(private http: HttpClient) { }

    getLastIncome(): Observable<Income> {
        const url: string = `${this.apiUrl}income`;
        return this.http.get<Income>(url)
            .pipe(
                catchError(() => of())
            );
    }
}