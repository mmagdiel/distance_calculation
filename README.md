This proyect was created a simple server for mockup a api for loggin, please 

## `npm install`

and before start the serve api with

## `node index`

the serve have only two routes:

## `http://localhost:8000/`

with get method and response message 'hello world'

## `http://localhost:8000/login`

and post method that receives two params "username" and "password"
if the user is in db.json the response is "passed": true and if not "passed": false and the message 'Invalid user or passwords'


the available is **user:  me** with **password: 123** (It's super safe)

