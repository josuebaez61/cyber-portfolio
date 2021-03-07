import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitiateComponent } from './pages/initiate/initiate.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: InitiateComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '**', component: InitiateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
