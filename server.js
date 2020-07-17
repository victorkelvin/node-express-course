const express = require('express');
const myApp = express();

myApp.listen(8040, function() {
    console.log("Hello World!")
})

const mockUserData = [
        { name: 'Victor' },
        { name: 'Kelvin' }
    ]
    /*
    myApp.get('/users', function(req,res){
    	res.json({
    		success: true,
    		message: 'Sucessfully got users, Great!',
    		users: mockUserData
    	})
    })

    */

myApp.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        sucess: true,
        message: 'Got one user',
        user: req.params.id
    })
})