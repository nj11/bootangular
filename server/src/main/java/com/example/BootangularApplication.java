package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

//Have the main class in root package.
@SpringBootApplication
public class BootangularApplication extends SpringBootServletInitializer {

	//This is necessary to deploy to external app server like tomcat.
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(BootangularApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(BootangularApplication.class, args);
	}



}
