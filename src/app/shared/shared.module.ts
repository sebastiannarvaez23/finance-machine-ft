import { CardPrimaryComponent } from './components/card-primary/card-primary.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-sppiner/loading-spinner.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { LayoutBlurComponent } from './components/layout-blur/layout-blur.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [
        CardPrimaryComponent,
        LoadingSpinnerComponent,
        SidebarComponent,
        TableComponent,
        LayoutBlurComponent,
        ModalComponent
    ],
    exports: [
        CardPrimaryComponent,
        LoadingSpinnerComponent,
        SidebarComponent,
        TableComponent,
        LayoutBlurComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }