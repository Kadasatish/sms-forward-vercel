const express = require('express');
const app = express();
app.use(express.json());

app.post('/sms', (req, res) => {
  console.log('SMS Received:', req.body);
  res.status(200).send('SMS received!');
});

// Export the express app as a Vercel handler
module.exports = app;
