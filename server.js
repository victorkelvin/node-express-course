const express = require('express');
const myApp = express();

const bodyParser = require('body-parser');
myApp.use(bodyParser.json());


myApp.listen(8040, function() {
    console.log("Server Running!")
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

myApp.post('/login', function(req,res){
    const username  =   req.body.username;
    const pass      =   req.body.pass;

    const mockUsername  = "victor";
    const mockPass      = "kelvin";

    if(username == mockUsername && pass == mockPass){
        res.json({
            success: true,
            message: 'name and pass match!',
            token: 'encrypt. token goes here'
        })
    }else{
        res.json({
            success: false,
            message: 'name and pass dont match!'
        })
    }

})