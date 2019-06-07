import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './paginas/home/home.component';
import { CategoriaComponent } from './paginas/categoria/categoria.component';
import { EstadoComponent } from './paginas/estado/estado.component';
import { ContatoSalvarComponent } from './contato/contato-salvar/contato-salvar.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'categoria',component:CategoriaComponent},
{path:'estado',component:EstadoComponent},
{path:'contato',component:ContatoSalvarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
