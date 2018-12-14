const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const indexRoute = require('./routes/indexRoute');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', indexRoute);

app.listen(port, function () {
    console.info(`[SERVER] Iniatialized on port ${port}!`)
})