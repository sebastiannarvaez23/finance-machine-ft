import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { NgModule } from '@angular/core';
import { PaymentPageComponent } from './pages/payment/payment-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormPaymentComponent } from './components/form-payment/form-payment.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomePageComponent,
        PaymentPageComponent,
        FormPaymentComponent
    ],
    exports: [
        HomePageComponent,
        PaymentPageComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class MachineModule { }