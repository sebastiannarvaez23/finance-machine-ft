import { Component, Input } from '@angular/core';
import { Company } from '../../interfaces/company.interface';

@Component({
    selector: 'machine-form-company',
    templateUrl: './form-company.component.html',
    styleUrls: ['./form-company.component.css'],
})
export class FormCompanyComponent {
    @Input() data: Company = {
        id: 0,
        name: "",
    };
    @Input() lblBtnSend: string = "";
}