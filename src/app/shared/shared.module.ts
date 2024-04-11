import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardPrimaryComponent } from './components/card-primary/card-primary.component';
import { RowsComponent } from './components/rows/rows.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
    declarations: [
        SidebarComponent,
        CardPrimaryComponent,
        RowsComponent,
        TableComponent
    ],
    exports: [
        SidebarComponent,
        CardPrimaryComponent,
        RowsComponent,
        TableComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }