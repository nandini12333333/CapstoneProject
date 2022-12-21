package com.shopping.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shopping.model.Customer;
import com.shopping.model.Product;
import com.shopping.model.Wishlist;


@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {
	
	List<Wishlist> findByCustomer(Customer customer);
	Wishlist findByCustomerAndProduct(Customer cust,Product pro);

}
