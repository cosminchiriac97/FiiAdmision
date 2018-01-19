# FiiAdmission
## Project Description
**FiiAdmission** is a project whose purpose is to facilitate the admission process to Faculty of Computer Science, "Alexandru Ioan Cuza" University of Iasi.

## Proposed functionalities
1. As a **user**, you are able to:
  - *create an account*
  - *confirm your e-mail*
  - *reset or recover your password*
  - *complete, submit and modify your application form*
  - *view announcements*
  - *view notifications*
  - *view exam repartitions*
2. As an **administrator**, you are able to:
  - *review application form*
  - *create, modify and delete announcements*
  - *send notifications*
  - *generate the exam repartitions*
  
 
## Patterns implemented
1. The Backend API is implemented using the MVC pattern, and structured according to the Onion Architecture.
2. Tests are written using the System Under Test pattern
3. The Frontend server is implemented in Angular 2/5 

## Best practices
1. User authentication is done using JWT's, along with Claim-based authorization.
![JWT authentication](https://i.imgur.com/avuKQ70.png)
![Claim based authorization](https://i.imgur.com/Z92hEhp.png)


 (The angular service that attaches the *auth_token* to each authorized request)

![Authorization header](https://i.imgur.com/NPmPgtA.png)


2. The Backend API is hosted on Microsoft's Azure platform, along with the databases and storages, to prevent the dangers of hosting the locally, as well as getting the benefits of shared databases for the projects developers. All the application forms are saved as blobs in the storage, as well as the images that come along.

![Azure platform](https://i.imgur.com/zaDyodr.png)


3. The Backend API is (re)deployed with every push to the github repository.
4. The Backend API and Front-end run separately.
5. The Backend API uses swagger, to make testing easier.
6. Account creation is accompanied by e-mail validation, to prevent users from being registered without their consent.
7. Frontend server provides _Guards_ that keeps accessing certain resources dedicated strictly to logged users.

8. The application form has a dynamic approach as fields are easy to be added, moved or removed.

#### Example:

![JSON_field](https://i.imgur.com/UhHMNaS.png)
![Interface_field](https://i.imgur.com/mrp7q4a.png)

## Agile/Scrum principles applied
1. Each week, the scrum master held a skype conference with all the members to review previous tasks and asign new ones, as well as review the overall status of the project.
2. In the design phase of the project, we used Trello as a task-managing platform; when the development began, we switched to Github's Issues platform.

## We learned

- to better organize our own work in order for others to understand it, fix it or continue it.
- to live with the fact that sometimes we are dependents on other's work/task
- be more patient with project colleagues and learned to accept everyone has different working styles
- if your project's architecture is planned really well since the early days of the project, your last days will be more bearable
- to ask before we attempt to modify a pre-implemented functionality
- _DestroyDatabase()_ is fun times while unit testing a day before project presentation


# Angular Server hosting link: 
https://fii-admission.firebaseapp.com/

# API Server with swagger interface: 
http://fiiadmission.azurewebsites.net/swagger/
