let express = require('express');
let nedb = require('nedb');
db = new nedb('first.db');
db.loadDatabase();

let app = express();
  app.listen('4000', () => {
    console.log('successful connect');

  });
  app.use(express.static('public'));
  app.use(express.json());

  app.get('/position', (req, res) => {
    // using Database Query
    db.find({},  (err, docs) => {
      if (err) {
        res.status(404).end()
        return ;
      }
      console.log('get everything from db & send to client side');
      res.json(docs)

  });
});
  // app.post('/api' , function (request, response) {
  //   response.json({
  //     name:'rachid',
  //     age:'21',
  //     skills:['prblem solving', 'IT', 'writing', 'communication'],
  //     city:{
  //       name:'elmeghaier',
  //       isSahara:true,
  //       source:{alger:{state:'eloued'}}
  //     }
  //   });
  // });

// position endpoint
app.post('/position' , function (req, res) {
let data = req.body;
data.timestamp = Date.now();
// send after click lant & longitude
// db.insert(data, (err, newDoc) => {
//   res.json(newDoc);
// });

});
