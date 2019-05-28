import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../entidades/categoria';
import { ServicoCategoria } from '../../servico/servico.categoria';
import { Observable } from 'rxjs';


@Component({
  selector:'categoria-component',
  templateUrl:'categoria.component.html',
  styleUrls:['categoria.component.css']
})

export class CategoriaComponent implements OnInit{

  categoria$ : Observable<Categoria[]>;

  categoria : Categoria = new Categoria();
  categoria2 : Categoria = new Categoria();
  salvar : boolean = true;

  constructor(private servico : ServicoCategoria){

  }

  ngOnInit(){
    this.atualizar();
  }

  atualizar(){
    this.categoria$ = this.servico.listar();
  }

  adicionar() : void {
    if(this.salvar){
      this.servico.adicionar(this.categoria).subscribe(
        () =>{
          this.atualizar();
        }
      );

    }
    else{
      this.servico.alterar(this.categoria).subscribe(
        () =>{
          this.atualizar();
        }
      );
    }

    this.categoria = new Categoria();

  }

  alterar(categoria: Categoria) : void {
    this.categoria = categoria;
    this.salvar = false;
  }

  excluir(id:number) : void {
    this.servico.excluir(id).subscribe(
      () =>{
        this.atualizar();
      }
    );
  }

  pegarCategoria(i:number) : void{
    this.categoria2 = this.servico.pegarCategoria(i);
  }
}
