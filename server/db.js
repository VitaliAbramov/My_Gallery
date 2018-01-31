const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'gallery';

const getAllImages = function(callback) {
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    
    findDocuments(db, function(images){      
      client.close();

      callback(images);
    });

    
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('images');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
}

module.exports = {
  getAllImages: getAllImages
};




