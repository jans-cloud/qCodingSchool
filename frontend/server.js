/*
  Licensed Materials - Property of IBM
  6949-70S

  © Copyright IBM Corp. 2019 All Rights Reserved

  US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.

*/
require('dotenv').config();
const express = require('express');
const path = require('path');

const { PORT } = process.env

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(`app.listen() Error: ${JSON.stringify(error)}`);
  } else {
    console.log(`App started on Port ${PORT}`);
  }
});
