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
  - view exam repartitions
2. As an **administrator**, you are able to:
  - *review application form*
  - *create, modify and delete announcements*
  - send notifications
  - *generate the exam repartitions*
  
 Functionalities in *italics* have been completed
 
## Patterns implemented
1. The Backend API is implemented using the MVC pattern, and structured according to the Onion Architecture.
2. Tests are written using the System Under Test pattern

## Best practices
1. User authentication is done using JWT's, along with Claim-based authorization.
![JWT authentication](https://drive.google.com/open?id=1rCyCYlthAaEC-qsDGe8acwyk29pUW2L7)
![Claim-based authorization](https://drive.google.com/open?id=1IoELgK2DmVGekqbltQcu693Fj6oTAKCC)


2. The Backend API is hosted on Microsoft's Azure platform, along with the databases and storages, to prevent the dangers of hosting the locally, as well as getting the benefits of shared databases for the projects developers. All the application forms are saved as blobs in the storage, as well as the images that come along.
![Azure platform](https://drive.google.com/open?id=1X6ydPy4W13itGfFnGR0-edLddIUiUi3a)


3. The Backend API is (re)deployed with every push to the github repository.
4. The Backend API and Front-end run separately.
5. The Backend API uses swagger, to make testing easier.
6. Account creation is accompanied by e-mail validation, to prevent users from being registered without their consent.

## Agile/Scrum principles applied
1. Each week, the scrum master held a skype conference with all the members to review previous tasks and asign new ones, as well as review the overall status of the project.
2. In the design phase of the project, we used Trello as a task-mananing platform; when the development began, we switched to Github's Issues platform.


Firebase link: https://fii-admission.firebaseapp.com/
Azure link: http://fiiadmission.azurewebsites.net/swagger/
