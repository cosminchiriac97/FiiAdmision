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
![JWT authentication](https://lh3.googleusercontent.com/inO4oAAqVAeDz3EWO9oilsFxC3odmD0sE6kgjoXhGK9GR0ivvAoloPeIl4H2bHewfvIXofgla1VlLli1QReC=w1918-h947)
![Claim-based authorization](https://lh6.googleusercontent.com/dwwArrf23aTzrb6diNs_8YYnM6Wp2Kh9X5Us_XoIvIcLPmVoEJYctBrZB8MaqChTUOE_3dvfNKkn541P3IuU=w1918-h947-rw)


2. The Backend API is hosted on Microsoft's Azure platform, along with the databases and storages, to prevent the dangers of hosting the locally, as well as getting the benefits of shared databases for the projects developers. All the application forms are saved as blobs in the storage, as well as the images that come along.
![Azure platform](https://lh3.googleusercontent.com/UKdIjhbOH2GFOT2hiBMn-qb_RoB-r3nwzRgDAgt0q7hUVt-fDjqDMNxofpRHQc2CUqI3_AqBkQDRcNKaVFl4=w1918-h947-rw)


3. The Backend API is (re)deployed with every push to the github repository.
4. The Backend API and Front-end run separately.
5. The Backend API uses swagger, to make testing easier.
6. Account creation is accompanied by e-mail validation, to prevent users from being registered without their consent.

## Agile/Scrum principles applied
1. 
