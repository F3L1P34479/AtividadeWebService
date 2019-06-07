import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../entidade/contato';
import { take } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly URL = "";

  contato : Contato = new Contato();
  

  constructor(private base : AngularFireDatabase){
  }

  salvar(contato: Contato) {
    return this.base.list('contato').push(this.contato);
  }


}
