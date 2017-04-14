var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userModel = require('./modules/user');
var app = express();

mongoose.Promise = global.Promise;//resolve start warning message
//var db = mongoose.createConnection('localhost','test');
mongoose.connection.on("open", function(ref) {
  console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
});
mongoose.connect('mongodb://localhost/cmapidb');
//mongoose.connect('mongodb://47.92.76.55:27017/cmapidb');

app.use(bodyParser.json({limit: '1mb'})); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/**use for test connect**/
app.get('/hello', function(req, res){
   res.send({"message": "hello world!"})
})

/**register user**/
app.post('/register', function(req, res){
 console.log(req.header("content-type"));
	var user_name=req.body.user;  
  	var password=req.body.password;  
  	console.log("User name = "+user_name+", password is "+password); 
  	//findbyusername
  	userModel.findByName(user_name,function(error,userObj){
  		if(userObj!=null){
  			console.log("find by name : "+userObj);
  			res.status(406); 
        res.send({"message": "user name existing, please try another one!"});
  			return;
  		}
  		var userentity = new userModel({"username":user_name,"password":password});
  		userentity.save();
  		res.send({"message": "register successfully !!!"});
  	})
});

/**user login**/
app.post('/login', function(req, res){
	var user_name=req.body.user;  
  	var password=req.body.password;  
  	console.log("User name = "+user_name+", password is "+password); 
  	userModel.findByUser(user_name,password,function(error,userObject){
  		if(error != null){
  			res.send(error);
  			return;
  		}
  		console.log(userObject.username);
  		if(userObject!=null){
  			console.log("userObject:"+userObject.username);
  			console.log("userObject:"+userObject.password);
        res.send({"message":"login successfully"});
  		}
  	});
});


//start server
var server = app.listen(3000, function() {
   console.log('listening on port %d', server.address().port);
});