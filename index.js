const server = require('diet')
const app = server()
const db = require('./db.json')
const _ = require('lodash')

app.listen('http://localhost:8000')
app.get('/', function($){
    $.end('Hello World!')
})

app.post('/login', function($){
    const obj = {
        username: $.body.username, 
        password: $.body.password.toString()
    }
    const flag = _.find(db.user, obj) 
    if (flag) { 
        $.success()
    } else {
        $.error('msg', 'Invalid user or passwords')
        $.failure()
    }
})