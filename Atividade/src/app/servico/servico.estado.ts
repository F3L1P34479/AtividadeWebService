import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoEstado {

  constructor() { }
  /*
  private readonly URL = "http://localhost:8080/ws/categoria/";

  categoria: Categoria = new Categoria();
  listaCategoria = new Array<Categoria>();

  constructor(private http: HttpClient){
  }

  adicionar(categoria: Categoria) {
    return this.http.post(this.URL, categoria).pipe(take(1));
  }

  alterar(categoria: Categoria) {
    return this.http.put(this.URL, categoria).pipe(take(1));
  }

  excluir(id:number) {
    return this.http.delete(this.URL+id).pipe(take(1));
  }

  pegarCategoria(i:number) : Categoria{
    return this.listaCategoria[i];
  }

  listar(){
    return this.http.get<Categoria[]>(this.URL).pipe(take(1));
  }
*/
}
