package com.devdatovo.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devdatovo.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}
