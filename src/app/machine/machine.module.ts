import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        HomePageComponent,
        HeaderComponent,
    ],
    exports: [
        HomePageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class MachineModule { }