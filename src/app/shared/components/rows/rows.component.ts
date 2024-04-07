import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Payment } from 'src/app/machine/interfaces/payments';

@Component({
  selector: 'app-rows',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowsComponent {

  @Input()
  public payments: Payment[] = [];

}