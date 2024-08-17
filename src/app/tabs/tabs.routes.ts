import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'configuracion',
        loadComponent: () =>
          import('../configuracion/configuracion.page').then((m) => m.ConfiguracionPage),
      },
      {
        path: 'actas',
        loadComponent: () =>
          import('../registroacta/registroacta.page').then((m) => m.RegistroactaPage),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('../perfil/perfil.page').then((m) => m.PerfilPage),
      },
      {
        path: '',
        redirectTo: 'actas',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'actas',
    pathMatch: 'full',
  },
];
