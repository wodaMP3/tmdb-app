const express = require('express');
const axios = require('axios');

const permissionURL = `https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}`;


const app = express();
const port = 3000;

app.use(express.json());

app.post('/authenticate', async (req, res) => {
  try {
    const { url, method, data } = req.body;

    const response = await axios({
      method,
      url: `https://www.themoviedb.org/${url}`,
      data
    });

    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});