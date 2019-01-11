# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Build client

Run `npm install` to install all dependencies on client directory
  
Run `mvn clean install` on client directory


## Build client and server

Run `npm install` to install all dependencies on client directory
 
Run `mvn clean install` on parent directory.This will generate a war file under server\target directory that can be deployed to tomcat.

Note : ng build on client is done using base-href bootangular which is the context name for the web application.
 
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
