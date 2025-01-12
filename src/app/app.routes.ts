import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        '@dashboard/pages/dps-page-dashboard/dps-page-dashboard.component'
      ).then((m) => m.DpsPageDashboardComponent),
  },
  {
    path: 'factoryConfigurator',
    loadComponent: () =>
      import(
        '@factoryConfigurator/pages/dps-page-factory-configurator/dps-page-factory-configurator.component'
      ).then((m) => m.DpsPageFactoryConfiguratorComponent),
  },
  {
    path: 'library',
    loadComponent: () => import('@shared/pages/dps-page-library/dps-page-library.component').then((m) => m.DpsPageLibraryComponent),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
