const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const AICall = require('./AICall');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config()

// Call AI
app.get('/api/poi', async (req, res) => {
  const { input, context } = req.query;
  if (!input || !context) {
    return res.status(400).json({ error: "Item is required" });
  }
  const result = await AICall(input, context);
  res.json({ data: result });
});

app.listen(app.listen(process.env.API_PORT, () => {
  console.log(`Server is Running on http://localhost:${process.env.API_PORT}.`)
}))
