const express = require('express');
const myApp = express();

myApp.listen(8040, function() {
    console.log("Hello World!")
})