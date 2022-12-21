package com.shopping;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import com.shopping.models.Admin;
import com.shopping.services.AdminService;

@EnableDiscoveryClient
@SpringBootApplication
public class AuthServiceApplication {

	private static final Logger log = LoggerFactory.getLogger(AuthServiceApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(AuthServiceApplication.class, args);
	}
	@Bean
	public CommandLineRunner demo(AdminService srv) {
		return (args) -> {
	    	if(srv.count()==0) {
	    		srv.updateAdmin(new Admin("admin", "admin", "Administrator"));
	    		srv.updateAdmin(new Admin("nandini", "nandini", "Administrator"));
	    		srv.updateAdmin(new Admin("aishwarya", "aishwarya", "Administrator"));
	    		log.info("Admin user created successfully");
	    	}
	    };
	}

}
