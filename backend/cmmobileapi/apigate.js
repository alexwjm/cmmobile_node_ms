var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userModel = require('./modules/user');
var app = express();
var constants = require('./utils/constants');

mongoose.Promise = global.Promise;//resolve start warning message
//var db = mongoose.createConnection('localhost','test');
mongoose.connection.on("open", function(ref) {
  console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
});

console.log("constants.DBUrl:"+constants.DBUrl);
mongoose.connect(constants.DBUrl);
//mongoose.connect('mongodb://47.92.76.55:27017/cmapidb');

app.use(bodyParser.json({limit: '1mb'})); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
/**all request come to server set Access-Control-Allow-Origin for cross call*/
app.all('*',function(req,res,next){
	console.log("into * function");
	res.set("Access-Control-Allow-Origin","*");
	next();
	}
)

/**use for test connect**/
app.get('/hello', function(req, res){
   res.send({"message": "hello world!"})
})

/**register user**/
app.post('/register', function(req, res){
  try{
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
  }catch(e){
    console.log("post:register catch block!!!");
     res.send({"message":"go to exception flow"});
  }
});

/**user login**/
app.post('/login', function(req, res){
  try{
	  var user_name=req.body.user;  
  	var password=req.body.password;
    if(user_name==null || password==null){
      res.send({"message": "please input user name and password"});
    }
  	console.log("User name = "+user_name+", password is "+password); 
  	userModel.findByUser(user_name,password,function(error,userObject){
  		if(error != null){
  			res.send({"message": error});
  			return;
  		}
  		if(userObject!=null){
        res.send({"message":"login successfully"});
  		}else{
        res.status(constants.HttpStatus_WhenVerifyFailed);
        res.send({"message":"username or password wrongly"});
      }
  	});
  }catch(e){
    console.log("post:login catch block!!!");
    res.send({"message":"go to exception flow"});
  }
});

/**show cards list to let user select**/
app.post('/loadcards', function(req, res){
  var user_name=req.body.user;  

 //call bank API to get the cards list
  res.send({"message":"login successfully"});

});

/**card link to alipay**/
app.post('/linkalipay', function(req, res){
  var user_name=req.body.cardno;  

 //call ali API to get the cards list

});


//start server
var server = app.listen(3000, function() {
   console.log('listening on port %d', server.address().port);
});