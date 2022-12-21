package com.shopping.dtos;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.shopping.model.Product;


public class ProductDTO extends Product {
	
	private MultipartFile pic;
	

	public MultipartFile getPic() {
		return pic;
	}


	public void setPic(MultipartFile pic) {
		this.pic = pic;
	}


	public static Product toEntity(ProductDTO dto) {
		Product entity=new Product();
		BeanUtils.copyProperties(dto, entity, "pic");		
		return entity;
	}
}
