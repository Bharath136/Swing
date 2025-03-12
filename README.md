# AdonisJS Project Setup 🚀

NOTE: ---- Im Getting Confusion with JWT and Hash Password Packages to install, so the reason i have implemented other crud operations, and im trying to acheive that functionality as well, if possible you can guide on that i'll definetely mould my self over the time. And i have done complete functionality using NODE JS and EXPRESS JS you can consider that also.

### Install & Setup  
```sh
git clone <repo-url> && cd <project-folder>  
npm install  
cp .env.example .env  # Update DB credentials  
node ace migration:run  
node ace serve --watch  

### Configure Auth & Hashing 

node ace configure @adonisjs/auth  
node ace configure @adonisjs/hash

API Endpoints
POST /users → Register User
PUT /users/id → Update User
GET /users/id → Get User
DELETE /users/id → Delete User
