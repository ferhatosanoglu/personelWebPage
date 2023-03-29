import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import {
  HomepageComponent,
  ProjectComponent,
  AboutComponent
} from './';
import { ProjectCardComponent } from 'src/app/components/project-card/project-card.component';

@NgModule({
  declarations: [HomepageComponent, ProjectCardComponent, ProjectComponent, AboutComponent],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule { }
