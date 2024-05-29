import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { NgModule } from '@angular/core';
import { PaymentPageComponent } from './pages/payment/payment-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormPaymentComponent } from './components/form-payment/form-payment.component';
import { IncomePageComponent } from './pages/income/income-page.component';
import { FormIncomeComponent } from './components/form-income/form-income.component';
import { FormCompanyComponent } from './components/form-company/form-company.component';

@NgModule({
    declarations: [
        HomePageComponent,
        PaymentPageComponent,
        IncomePageComponent,
        HeaderComponent,
        FormPaymentComponent,
        FormIncomeComponent,
        FormCompanyComponent,
    ],
    exports: [
        HomePageComponent,
        PaymentPageComponent,
        IncomePageComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class MachineModule { }