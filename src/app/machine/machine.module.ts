import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { IncomePageComponent } from './pages/income/income-page.component';

@NgModule({
    declarations: [
        HomePageComponent,
        IncomePageComponent,
        HeaderComponent,
    ],
    exports: [
        HomePageComponent,
        IncomePageComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class MachineModule { }