import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Payment } from 'src/app/machine/interfaces/payment';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css'],
})
export class RowsComponent {

  @Input()
  public payments: Payment[] = [];

}