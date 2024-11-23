const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 80;

const db = mysql.createConnection({
  host: '10.27.160.3',  // Cloud SQL socket path
  user: 'ia2024',  // Your database username
  password: '123456',  // Your database password
  database: 'aplicacion',  // Your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Middleware to parse JSON request bodies
app.use(express.json());



// API 1: Get a greeting message
app.get('/evaluar/:id', (req, res) => {
  let idRespuesta = req.params.id;
  const query = 'SELECT * FROM respuestas WHERE ID_respuesta = ?';

  db.query(query, [idRespuesta], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json(results[0]);  // Return the first (and ideally only) result
  });
  res.json({ message: 'Hello, welcome to our API!' });
});

// API 2: Get the current server time
app.get('/api/time', (req, res) => {
  const currentTime = new Date().toISOString();
  res.json({ time: currentTime });
});

// API 3: Get a random quote
app.get('/api/quote', (req, res) => {
  const quotes = [
    'The only limit to our realization of tomorrow is our doubts of today.',
    'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    'In the middle of every difficulty lies opportunity.',
    'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    'The best way to predict the future is to create it.'
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

// API 4: POST request to print the request body
app.post('/api/print', (req, res) => {
  console.log('Received POST request with body:', req.body);
  res.json({ message: 'Request body received successfully', body: req.body });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
