package br.com.giovanini.webservice.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import br.com.giovanini.webservice.entidade.Categoria;

public interface DAOCategoria extends JpaRepository<Categoria, Integer>{

}
