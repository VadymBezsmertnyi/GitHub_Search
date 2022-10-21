const axios = require('axios');
const express = require('express');
const app = express();

const URL_GITHUB_API = `https://api.github.com/`;
//https://api.github.com/users/mojombo
app.get('/', (req, res) => {
  res.send('Welcome to CORS server 😁');
});

//https://api.github.com/search/users?q=fdfe

app.get('/user', async (req, res) => {
  const { query } = req;
  res.set('Access-Control-Allow-Origin', '*');

  const requestOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    redirect: 'follow',
  };

  await axios(`${URL_GITHUB_API}users/${query.user}`, requestOptions).then(
    (result) => {
      res.send(JSON.stringify({ ...result.data, userName: query.user }));
    }
  );
});

app.get('/search/user', async (req, res) => {
  const { query } = req;
  res.set('Access-Control-Allow-Origin', '*');

  const requestOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    redirect: 'follow',
  };

  await axios(
    `${URL_GITHUB_API}/search/users?q=${query.user}`,
    requestOptions
  ).then((result) => {
    res.send(JSON.stringify({ ...result.data, userName: query.user }));
  });
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
