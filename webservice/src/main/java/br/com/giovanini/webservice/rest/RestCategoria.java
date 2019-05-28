package br.com.giovanini.webservice.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.giovanini.webservice.dao.DAOCategoria;
import br.com.giovanini.webservice.entidade.Categoria;

@CrossOrigin
@RestController
@RequestMapping("/ws/categoria")
public class RestCategoria {
	
	@Autowired
	private DAOCategoria dao;
	
	@RequestMapping(method = RequestMethod.POST)
	public void salvar(@RequestBody Categoria categoria) {
		dao.save(categoria);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Categoria>> buscar() {
		List<Categoria> lista = dao.findAll();
		ResponseEntity<List<Categoria>> resposta = 
				new ResponseEntity<>(lista, HttpStatus.OK);
		return resposta;
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public void alterar(@RequestBody Categoria categoria) {
		Categoria categoriaBD = dao.findById(categoria.getId()).get();
		categoriaBD.setNome(categoria.getNome());
		categoriaBD.setDescricao(categoria.getDescricao());
		dao.saveAndFlush(categoriaBD);
	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public void excluir(@PathVariable("id") int id) {
		dao.deleteById(id);
	}
}
