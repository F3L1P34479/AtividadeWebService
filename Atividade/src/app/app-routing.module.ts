import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './paginas/home/home.component';
import { CategoriaComponent } from './paginas/categoria/categoria.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'categoria',component:CategoriaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
