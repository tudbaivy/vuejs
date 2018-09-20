
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){
	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});
	app.post('/posts', (req, res) => {
		// You'll create your note here.
		const note = { content: req.body.content, title: req.body.title, summary: req.body.summary, published: req.body.published, author: req.body.author  };
		db.collection('posts').insert(note, (err, result) => {
		  if (err) {
			res.send({ 'error': 'An error has occurred' });
		  } else {
			res.send(result.ops[0]);
		  }
		});
	  });
	  app.get('/posts/:id', (req, res)=>{
		  const id = req.params.id;

		  const details = {"_id": new ObjectID(id)};
		  db.collection('posts').findOne(details, (err, item)=>{
			  if (err){
				  res.send({'error':'An error has occurred'});
			  } else {
				  res.send(item);
			  }
		  })
	  })
	  app.get('/posts', (req, res)=>{
		  db.collection('posts').find({}).toArray((err, item)=>{
			  if (err){
				  res.send({'error':'An error has occurred'});
			  } else { console.log(item);
				    res.send({data:item});
			  }
		  })
	  })
}
