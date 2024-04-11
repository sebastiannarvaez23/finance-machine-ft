import { Component, Input } from '@angular/core';
import { Indexed } from '../../interfaces/indexed';

@Component({
    selector: 'shared-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent<T extends Indexed> {
    @Input() data: T[] = [];

    constructor() { }

    getKeys(obj: T): string[] {
        return Object.keys(obj);
    }

    getValueAsString(item: T, key: string): string {
        return item[key].toString();
    }
}