# Practice3
# Usage:
 To start project go to ```/src/server``` and type ```node server.js```
 
# Description for /src/server folder
In server.js created server which connected to mongodb

# Usage for curl:
##### Get user by email:
#
```
curl --request GET 'localhost:3000/v1/user' --header 'Content-Type: application/json' --data-raw '{ "email": "test@gmail.com" }'
```
##### Create user with email and name:
#
```
curl --request POST 'localhost:3000/v1/user' --header 'Content-Type: application/json' --data-raw '{"email": "test@gmail.com", "name": "test"}'
```
##### Update email with name of user:
#
```
curl --request PATCH 'localhost:3000/v1/user' --header 'Content-Type: application/json' --data-raw '{ "name": "test", "email": "mail@gmail.com" }'
```
##### Delete user with email:
#
```
curl --request DELETE 'localhost:3000/v1/user' --header 'Content-Type: application/json' --data-raw '{ "email": "mail@gmail.com" }'
```
