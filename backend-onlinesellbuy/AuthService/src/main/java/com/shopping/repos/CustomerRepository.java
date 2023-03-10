package com.shopping.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shopping.models.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	Customer findByUserid(String userid);
}
