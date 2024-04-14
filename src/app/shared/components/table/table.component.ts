import { Component, Input } from '@angular/core';
import { Indexed } from '../../interfaces/indexed';
import { TableColumn } from '../../interfaces/table-colum';

@Component({
    selector: 'shared-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent<T extends Indexed> {

    @Input() public data: T[] = [];
    @Input() public headers: TableColumn[] = [];
    public additionalDataColumns: TableColumn[] = [];

    public columSizes: string = "";

    constructor() { }

    ngOnInit() {
        this.getColumnSize();
        this.getAdditionalDataColumns();
    }

    getKeys(obj: T): string[] {
        return Object.keys(obj);
    }

    getColumnSize(): void {
        let porcColum: string = "";
        this.headers.forEach((header) => porcColum = porcColum + header.width + "% ");
        this.columSizes = `${porcColum}`;
    }

    getAdditionalDataColumns(): void {
        this.additionalDataColumns = this.headers.filter(
            (header) => !header.relatedToDataColumn);
    }
}