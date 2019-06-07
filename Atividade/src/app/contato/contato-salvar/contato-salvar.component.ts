import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ContatoService } from '../servico/contato.service';

@Component({
  selector: 'app-contato-salvar',
  templateUrl: './contato-salvar.component.html',
  styleUrls: ['./contato-salvar.component.css']
})

export class ContatoSalvarComponent implements OnInit {

  contato$ : Observable<Contato[]>;

  contato : Contato = new Contato();

  constructor(private servico : ContatoService) { }

  ngOnInit() {
  }

  salvar(){
    this.servico.salvar(this.contato)
    this.contato = new Contato();
  }

}
