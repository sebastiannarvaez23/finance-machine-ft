import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { NgModule } from '@angular/core';
import { PaymentPageComponent } from './pages/payment/payment-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HeaderComponent,
        HomePageComponent,
        PaymentPageComponent,
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