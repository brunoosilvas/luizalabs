const express = require('express');
const cors = require('cors');
const consign = require('consign');
const parser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(parser.urlencoded({ extended: true }));

consign()
   .include('app/route')
   .then('config/mock.js')
   .then('app/model')
   .then('app/resource')
   .into(app);

module.exports = app;