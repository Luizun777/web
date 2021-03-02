import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.module').then((m) => m.CvModule)
  },
  {
    path: 'web',
    loadChildren: () => import('./Page/page.module').then((m) => m.PagesModule)
  },
  {path:'lobby', component: LobbyComponent},
  {path:'**', pathMatch:'full', redirectTo:'cv/Inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
