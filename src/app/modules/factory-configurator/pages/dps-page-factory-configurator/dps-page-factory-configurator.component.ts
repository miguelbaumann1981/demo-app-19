import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DpsTitlePageComponent } from '../../../../shared/components/dps-title-page/dps-title-page.component';
import { DpsFactoryItemComponent } from '../../../../shared/components/dps-factory-item/dps-factory-item.component';
import { FactoryListItem } from '@shared/interfaces/factory-list-item.interface';
import { FactoriesService } from '@factoryConfigurator/services/factories.service';
import { MessageModule } from 'primeng/message';

@Component({
    selector: 'dps-page-factory-configurator',
    imports: [DpsTitlePageComponent, DpsFactoryItemComponent, MessageModule],
    templateUrl: './dps-page-factory-configurator.component.html',
    styleUrl: './dps-page-factory-configurator.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DpsPageFactoryConfiguratorComponent {
  /**
   * Declarations
   */
  factoryList = signal<FactoryListItem[]>([]);
  errorMessage = signal<string | undefined>('There are no factories available');
  isErrorService = signal<boolean>(false);
  factoriesService = inject(FactoriesService);

  constructor() {
    this.loadFactories();
  }

  /**
   * Loads the list of factories from the service.
   */
  async loadFactories(): Promise<void> {
    try {
      const factories = await this.factoriesService.getAllFactories();
      this.factoryList.set(factories);
    } catch (error) {
      this.isErrorService.set(true);
      console.error(error);
    }
  }
}
