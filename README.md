# Simple App Using Angular 6 as Front End and Spring Boot 2 as the Server

## Prerequites to Run the Application

### Install NodeJS

Refer https://nodejs.org/en/ to install NodeJS

### Install Angular CLI

Use the following command to install angular CLI

```bash
npm install -g @angular/cli
```

Refer https://cli.angular.io/ to know more about angular CLI

### Install maven

Install Maven and Ensure IDE is pointing to Right Maven folder

Also Ensure maven is set as a path variable to that maven commands can be run easily

Refer https://maven.apache.org/ for maven installation

## Steps to Run the Application

Open the client folder and install the npm packages using the following commands

```bash
cd client
npm install
```

Go Back to the Parent Project Folder and build the package using the following commands

```bash
cd ..
mvn clean package
```

Go to server folder and start the Application using the following commands

```bash
cd server
mvn spring-boot:run
```

The Application runs on **localhost:8080** and the application runs in a embedded container in local

## Folder Structure

**client** : This has the Client Code implemented using Angular 6

**server** : This has the Springboot code

**pom.xml** : This is multimodule pom. This pom in turn executes the pom within the client and the server folders

