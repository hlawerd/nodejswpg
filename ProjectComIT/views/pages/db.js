var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("cars");
  //Sort the result by name:
  var sort = { name: 1 };
  dbo.collection("detail").find().sort(sort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});