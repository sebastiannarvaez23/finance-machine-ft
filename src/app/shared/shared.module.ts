import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardPrimaryComponent } from './components/card-primary/card-primary.component';
import { RowsComponent } from './components/rows/rows.component';

@NgModule({
    declarations: [],
    exports: [
        SidebarComponent,
        CardPrimaryComponent,
        RowsComponent
    ],
    imports: [
        CommonModule,
        SidebarComponent,
        CardPrimaryComponent,
        RowsComponent
    ]
})
export class SharedModule { }