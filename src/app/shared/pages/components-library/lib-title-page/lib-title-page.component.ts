import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DpsTitlePageComponent } from '@shared/components/dps-title-page/dps-title-page.component';
import { DropdownModule } from 'primeng/dropdown';
import { PrimeNgDropdownEvent, Variant } from '../interfaces/library.interfaces';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
    selector: 'lib-title-page',
    imports: [DpsTitlePageComponent, DropdownModule, TranslatePipe],
    templateUrl: './lib-title-page.component.html',
    styleUrl: '../../styles-library/library.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibTitlePageComponent {
  variants = signal<Variant[]>([]);
  selectedVariant = signal('0');

  constructor() {
    this.variants.set([
      { id: '0', name: 'Default' },
      { id: '1', name: 'Without icon' },
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
