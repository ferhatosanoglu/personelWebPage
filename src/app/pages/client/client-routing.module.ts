import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  HomepageComponent,
  ProjectComponent
} from './';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { title: 'Ferhat Osanoglu' },
    component: HomepageComponent,
  },
  {
    path: 'project',
    pathMatch: 'full',
    data: { title: 'Projeler' },
    component: ProjectComponent,
  },
  {
    path: 'about',
    pathMatch: 'full',
    data: { title: 'Hakkında' },
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule { }
