import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { CategoriaComponent } from './paginas/categoria/categoria.component';
import { ServicoCategoria } from './servico/servico.categoria';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent, HomeComponent, CategoriaComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [ServicoCategoria],
  bootstrap: [AppComponent]
})
export class AppModule { }
