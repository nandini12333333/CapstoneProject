package com.shopping.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.models.Category;
import com.shopping.repository.CategoryRepository;



@Service
public class CategoryService {

	@Autowired private CategoryRepository repo;
	
	public void save(Category cat) {
		repo.save(cat);
	}
	
	public List<Category> listAll(){
		return repo.findAll();
	}
	
	public Category findById(int id) {
		return repo.findById(id).orElse(null);
	}
	
	public void deleteCategory(int id) {
		repo.deleteById(id);
	}
}
