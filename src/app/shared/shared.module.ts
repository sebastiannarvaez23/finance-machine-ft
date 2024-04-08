import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardPrimaryComponent } from './components/card-primary/card-primary.component';
import { RowsComponent } from './components/rows/rows.component';

@NgModule({
    declarations: [
        SidebarComponent,
        CardPrimaryComponent,
        RowsComponent
    ],
    exports: [
        SidebarComponent,
        CardPrimaryComponent,
        RowsComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }