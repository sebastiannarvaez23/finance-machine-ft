import { Component, Input } from '@angular/core';
import { Income } from '../../interfaces/income.interface';

@Component({
    selector: 'machine-form-income',
    templateUrl: './form-income.component.html',
    styleUrls: ['./form-income.component.css'],
})
export class FormIncomeComponent {
    @Input() data: Income = {
        basic: 0,
        additional: 0,
    };
    @Input() lblBtnSend: string = "";

    isAddCompanyModalVisible: boolean = false;

    openAddCompanyModal() {
        this.isAddCompanyModalVisible = true;
    }

    closeAddCompanyModal() {
        this.isAddCompanyModalVisible = false;
    }
}