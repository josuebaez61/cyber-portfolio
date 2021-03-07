import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiateComponent } from './initiate/initiate.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [InitiateComponent, HomeComponent],
  exports: [InitiateComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
