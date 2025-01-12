import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'dps-panel-dashboard',
    imports: [PanelModule, ButtonModule],
    templateUrl: './dps-panel-dashboard.component.html',
    styleUrl: './dps-panel-dashboard.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DpsPanelDashboardComponent {

  title = input.required<string>();
  description = input.required<string>();
  hasOptions = input<boolean>(false);

 }
