const express = require('express');
const http = require('http');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const server = http.createServer(app);

server.listen(port, () => console.log(`paper getting stacked at port ${port}`));
app.use(express.static(`${__dirname}./../client`));

app.get('/markets', (req, res) => {
  axios.get('https://api.cryptonator.com/api/full/btc-usd')
   .then(results => res.json(results.data.ticker.markets))
   .catch(err => console.error(err))
});


