import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { CategoriaComponent } from './paginas/categoria/categoria.component';
import { EstadoComponent } from './paginas/estado/estado.component';
import { ServicoCategoria } from './servico/servico.categoria';
import { ServicoEstado } from './servico/servico.estado';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ContatoSalvarComponent } from './contato/contato-salvar/contato-salvar.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, CategoriaComponent, EstadoComponent, ContatoSalvarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCvSbcBejRggtBtOu7_Jdy78L-2PVEza6k",
      authDomain: "atividadefirebase-7b9ba.firebaseapp.com",
      databaseURL: "https://atividadefirebase-7b9ba.firebaseio.com",
      projectId: "atividadefirebase-7b9ba",
      storageBucket: "atividadefirebase-7b9ba.appspot.com",
      messagingSenderId: "727480967231",
      appId: "1:727480967231:web:4b64a89417b32dac"
    }),
    AngularFireDatabaseModule, 
  ],
  providers: [ServicoCategoria, ServicoEstado],
  bootstrap: [AppComponent]
})
export class AppModule { }
