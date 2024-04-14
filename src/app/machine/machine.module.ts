import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { PaymentPageComponent } from './pages/payment/payment-page.component';

@NgModule({
    declarations: [
        HomePageComponent,
        PaymentPageComponent,
        HeaderComponent,
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