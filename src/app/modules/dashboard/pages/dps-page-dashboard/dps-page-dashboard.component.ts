import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DpsTitlePageComponent } from '@shared/components/dps-title-page/dps-title-page.component';
import { DpsPanelDashboardComponent } from '@shared/components/dps-panel-dashboard/dps-panel-dashboard.component';
import { DpsCardGraphicsComponent } from '@shared/components/dps-card-graphics/dps-card-graphics.component';

@Component({
    selector: 'dps-page-dashboard',
    imports: [DpsTitlePageComponent, DpsPanelDashboardComponent, DpsCardGraphicsComponent],
    templateUrl: './dps-page-dashboard.component.html',
    styleUrl: './dps-page-dashboard.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DpsPageDashboardComponent {
}
