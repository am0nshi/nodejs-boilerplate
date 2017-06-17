'use strict';
// const server = require('server2')
import { user } from './user'

const express = require('express');

let user1 = new user(123,123);
let i = user1.ayncStuff(500)

i.then((result, error) => {
    console.log("Overall result " + result)
})


// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
    res.send('Hello world3\n'); 
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);