import { Component } from '@angular/core';
import { MachineService } from '../../services/machine.service';
import { Router } from '@angular/router';
import { Payment } from '../../interfaces/payments';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

    public payments: Payment[] = [];

    constructor(
        public machineService: MachineService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.machineService.getAllPayments()
            .subscribe((payments) => {
                if (!payments) return this.router.navigateByUrl('');
                console.log(payments);
                return this.payments = payments;
            })
    }
}
