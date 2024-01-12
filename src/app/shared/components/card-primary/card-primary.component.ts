import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-card-primary',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-primary.component.html',
  styleUrls: ['./card-primary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPrimaryComponent { }
