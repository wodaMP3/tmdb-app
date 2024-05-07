const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/authentication/token/new', async (req, res) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/authentication/token/new');
    res.json({ token: response.data.request_token });
  } catch (error) {
    console.error('Error fetching token:', error);
    res.status(500).json({ error: 'Failed to fetch token' });
  }
});

app.post('/authentication/session/new', async (req, res) => {
  try {
    const { token } = req.body;
    const response = await axios.post('https://api.themoviedb.org/3/authentication/session/new', {
      request_token: token
    });
    res.json({ validation: response.data });
  } catch (error) {
    console.error('Error validating token:', error);
    res.status(500).json({ error: 'Failed to validate token' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
