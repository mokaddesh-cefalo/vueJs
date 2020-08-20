const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/projects', (req, res) => {
  console.log(req.body);
  let response = {}, status = 200;
  let keys = Object.keys(req.body);

  keys.forEach(key => {
      if(req.body[key] === '') {
        response[key] = `${key} can not be empty`;
        status = 400;
      }
  });

  res.status(status);
  res.send(response);
});
app.use('/data', ((req, res) => res.send(
  {
    skills: ["hello", "hi", "yoo", "hola"]
  }
)));

app.use('', express.static(`${process.cwd()}/src/public`));

app.listen(port, () => {
  console.log(`App is listening to  ${port}`);
});
