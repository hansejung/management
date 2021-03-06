const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

const multer = require('multer');
const upload = multer({dest: './upload'});

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES( null, ?, ?, ?, ?, ?, NOW(), 0)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
      console.log(err);
      console.log(params);
    }
    )
})

app.get('/api/customers', (req,res) => {
//  console.log(conf.database);
  connection.query(
    "Select * from CUSTOMER WHERE isDeleted = 0",
    (err, rows, fields) => {
      if(err) console.log(err);
      // console.log('rows', rows);
      // console.log('fields', fields);
      res.send(rows);
    }

  );
});

app.delete('/api/customers/:id', (req, res) => {
  let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?';
  let params = [req.params.id];
  console.log(sql);
  connection.query(sql, params, 
    (err, rows, fields) => {
      if(err) console.log(err);
      res.send(rows);
    }
  )
}

)

  app.get('/api/customerstest', (req,res) => {
    res.send({message: 'Hello World Express!'});
    // res.send([{
    //     'id': 1,
    //     'image': 'https://placeimg.com/64/64/1',
    //     'name': '홍길동',
    //     'birthday': '961222',
    //     'gender': '남자',
    //     'job': '대학생'
    //   },
    //   {
    //     'id': 2,
    //     'image': 'https://placeimg.com/64/64/2',
    //     'name': '철수',
    //     'birthday': '980125',
    //     'gender': '남자',
    //     'job': '프로그래머'  
    //   },
    //   {
    //     'id': 3,
    //     'image': 'https://placeimg.com/64/64/3',
    //     'name': '순이',
    //     'birthday': '980514',
    //     'gender': '여자',
    //     'job': '디자이너'  
    //   }]);


});

app.listen(port,() => console.log(`Listening on port ${port}`));

