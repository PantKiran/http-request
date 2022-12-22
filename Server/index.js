const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())
               
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  var users =[{
    id: 1,
    name: "John Doe",
    age : 23,
    email: "john@doe.com"
}];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET /api/users
app.get('/api/users', function(req, res){
    return res.json(users);    
});


/* POST /api/users
    {
        "user": {
           "id": 3,
            "name": "Test User",
            "age" : 20,
            "email": "test@test.com"
        }
    }
*/
app.post('/api/users', function (req, res) {
    var user = req.body.user;
    users.push(user);

    return res.send('User has been added successfully');
});
