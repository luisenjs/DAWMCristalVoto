import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadComponent: () => import('./ingreso/iniciosesion/iniciosesion.page').then(m => m.IniciosesionPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./ingreso/registro/registro.page').then(m => m.RegistroPage)
  },
  {
    path: 'resultados',
    loadComponent: () => import('./resultados/resultados.page').then( m => m.ResultadosPage)
  }

];
