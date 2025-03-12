# AdonisJS Project Setup 🚀

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
