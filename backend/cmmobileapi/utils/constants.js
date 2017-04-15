var proputil = require("./proputil");

var envconfigs = proputil.parseproperties("./config/envconfig.properties","utf-8")

console.log("envconfigs:"+envconfigs);

var dburl = "mongodb://localhost/test";//local test

if(envconfigs!=null){
	dburl = 'mongodb://'+envconfigs.DB_USERNAME+":"+envconfigs.DB_PASSWORD+"@"+envconfigs.DB_HOST+":"+envconfigs.DB_PORT+'/'+envconfigs.DB_NAME
	console.log(dburl);
}
exports.DBUrl = dburl;
exports.HttpStatus_WhenVerifyFailed = envconfigs.HTTP_Status_VerifyFailed;