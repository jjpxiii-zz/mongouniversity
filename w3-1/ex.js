var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    //var query = {"category_code": "biotech"};

    var cursor = db.collection('students').find({});
    cursor.sort({"grade": -1}); 
    cursor.skip(4);
    cursor.limit(2);
     
    cursor.forEach(function(doc) {
        console.log(doc);
    });
});