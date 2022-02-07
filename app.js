let express = require('express');
let nedb = require('nedb');
const path = require('path');
const fruitRouter = require('./routes/router-afterindex.js');
db = new nedb('first.db');
db.loadDatabase();
let app = express();
let port = process.env.PORT || '4000';
app.listen(port, () => {
  console.log('successful connect');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.json());

  //midlleware
  app.get('/', (req,res) => {
    res.render('index', {
      title: 'getGps'
    });
  });
  app.get('/warning',(req,res) => {
    res.sendFile(path.join(__dirname, 'twelve.html'));
  });
  app.use('/fruit',fruitRouter);

  // position endpoint
  app.post('/position', (req, res) => {
    const data = req.body;
  data.timestamp = Date.now();
  res.json(data);
  // send after click lant & longitude
  // db.insert(data, (err, newDoc) => {
  //   res.json(newDoc);
  // });
  });


//   app.get('/position', (req, res) => {
//     // using Database Query
//     db.find({},  (err, docs) => {
//       if (err) {
//         res.status(404).end()
//         return ;
//       }
//       res.json(docs)
//
//   });
// });
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
  app.get('/rachid/:skill', (req,res) => {
    console.log(req.params);
    res.render('index', {
      title: 'getGps',
      name: req.query.name
    });
  });

// adding error page
app.use((req,res,next) => {
  res.render('error', {
    title: 'error page'
  });
});
