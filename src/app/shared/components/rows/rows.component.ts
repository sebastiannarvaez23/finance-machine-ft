import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class RowsComponent { }
