import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DpsPanelDashboardComponent } from '@shared/components/dps-panel-dashboard/dps-panel-dashboard.component';
import { DropdownModule } from 'primeng/dropdown';
import { PrimeNgDropdownEvent, Variant } from '../interfaces/library.interfaces';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'lib-panel-dashboard',
    imports: [DpsPanelDashboardComponent, DropdownModule, TranslatePipe],
    templateUrl: './lib-panel-dashboard.component.html',
    styleUrl: '../../styles-library/library.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibPanelDashboardComponent {
  variants = signal<Variant[]>([]);
  selectedVariant = signal('0');

  constructor() {
    this.variants.set([
      { id: '0', name: 'Default' },
      { id: '1', name: 'With options' },
    ]);
  }

  /**
   * Updates the selected variant based on the event value.
   *
   * @param event - The event containing the selected variant value.
   */
  selectVariant(event: PrimeNgDropdownEvent) {
    this.selectedVariant.set(event.value);
  }
}
