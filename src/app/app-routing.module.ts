import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  {
    path: 'web',
    loadChildren: './Page/page.module#PagesModule'
  },
  {path:'lobby', component: LobbyComponent},
  {path:'**', pathMatch:'full', redirectTo:'web/Inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
