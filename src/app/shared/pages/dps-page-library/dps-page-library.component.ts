import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LibTitlePageComponent } from '../components-library/lib-title-page/lib-title-page.component';
import { LibPanelDashboardComponent } from '../components-library/lib-panel-dashboard/lib-panel-dashboard.component';



@Component({
    selector: 'dps-page-library',
    imports: [LibTitlePageComponent, LibPanelDashboardComponent],
    templateUrl: './dps-page-library.component.html',
    styleUrl: './dps-page-library.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DpsPageLibraryComponent {
  
}
