const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');
const port = 8001;
// app.use(bodyParser.urlencoded({ extended: true }));
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
	  // db = database.db("posts");
	  require('./app/routes')(app, database);

	  app.listen(port, () => {
		console.log('We are live on ' + port);
  });
})
