import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'dps-card-graphics',
    imports: [CardModule, ButtonModule],
    templateUrl: './dps-card-graphics.component.html',
    styleUrl: './dps-card-graphics.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DpsCardGraphicsComponent {

  image = input<string>();
  title = input.required<string>();
  subtitle = input.required<string>();
  description = input<string>();
  hasActions = input<boolean>();
  yesButton = input<string>();
  noButton = input<string>();

 }
