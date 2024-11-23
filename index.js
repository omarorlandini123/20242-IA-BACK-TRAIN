const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 80;
app.use(express.json());

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




// API 1: Get a greeting message
app.get('/evaluar/:id', (req, res) => {
  let idRespuesta = req.params.id;
  const query = 
  " select e.ID_tipo_evaluacion,"+
  " CASE WHEN sum(c.valor) >0 AND sum(c.valor)<=8 THEN 1 ELSE 0 END val1,"+
  " CASE WHEN sum(c.valor) >8 AND sum(c.valor)<=12 THEN 1 ELSE 0 END val2,"+
  " CASE WHEN sum(c.valor) >12 AND sum(c.valor)<=17 THEN 1 ELSE 0 END val3,"+
  " CASE WHEN sum(c.valor) >17 AND sum(c.valor)<=20 THEN 1 ELSE 0 END val4"+
  " from respuestas a"+
  " inner join detalle_respuestas b on a.ID_respuesta = b.ID_respuesta"+
  " inner join preguntas e on b.ID_pregunta = e.ID_pregunta"+
  " inner join tipo_evaluaciones d on a.ID_tipo_evaluacion = d.ID_tipo_evaluacion"+
  " inner join alternativas c on b.ID_alternativa = c.ID_alternativa"+
  " where e.ID_tipo_evaluacion = 1"+
  " AND a.ID_respuesta = ?"+
  " group by  e.ID_tipo_evaluacion"+
  " "+
  " union all"+
  " select e.ID_tipo_evaluacion,"+
  " CASE WHEN sum(c.valor) >0 AND sum(c.valor)<=8 THEN 1 ELSE 0 END val1,"+
  " CASE WHEN sum(c.valor) >8 AND sum(c.valor)<=12 THEN 1 ELSE 0 END val2,"+
  " CASE WHEN sum(c.valor) >12 AND sum(c.valor)<=17 THEN 1 ELSE 0 END val3,"+
  " CASE WHEN sum(c.valor) >17 AND sum(c.valor)<=20 THEN 1 ELSE 0 END val4"+
  " from respuestas a"+
  " inner join detalle_respuestas b on a.ID_respuesta = b.ID_respuesta"+
  " inner join preguntas e on b.ID_pregunta = e.ID_pregunta"+
  " inner join tipo_evaluaciones d on a.ID_tipo_evaluacion = d.ID_tipo_evaluacion"+
  " inner join alternativas c on b.ID_alternativa = c.ID_alternativa"+
  " where e.ID_tipo_evaluacion = 2"+
  " AND a.ID_respuesta = ?"+
  " group by  e.ID_tipo_evaluacion"+
  " "+
  " union all"+
  " "+
  " select e.ID_tipo_evaluacion,"+
  " CASE WHEN sum(c.valor) >0 AND sum(c.valor)<=8 THEN 1 ELSE 0 END val1,"+
  " CASE WHEN sum(c.valor) >8 AND sum(c.valor)<=12 THEN 1 ELSE 0 END val2,"+
  " CASE WHEN sum(c.valor) >12 AND sum(c.valor)<=17 THEN 1 ELSE 0 END val3,"+
  " CASE WHEN sum(c.valor) >17 AND sum(c.valor)<=25 THEN 1 ELSE 0 END val4"+
  " from respuestas a"+
  " inner join detalle_respuestas b on a.ID_respuesta = b.ID_respuesta"+
  " inner join preguntas e on b.ID_pregunta = e.ID_pregunta"+
  " inner join tipo_evaluaciones d on a.ID_tipo_evaluacion = d.ID_tipo_evaluacion"+
  " inner join alternativas c on b.ID_alternativa = c.ID_alternativa"+
  " where e.ID_tipo_evaluacion = 3"+
  " AND a.ID_respuesta = ?"+
  " group by  e.ID_tipo_evaluacion"+
  " "+
  " union all"+
  " "+
  " select e.ID_tipo_evaluacion,"+
  " CASE WHEN sum(c.valor) >0 AND sum(c.valor)<=8 THEN 1 ELSE 0 END val1,"+
  " CASE WHEN sum(c.valor) >8 AND sum(c.valor)<=12 THEN 1 ELSE 0 END val2,"+
  " CASE WHEN sum(c.valor) >12 AND sum(c.valor)<=17 THEN 1 ELSE 0 END val3,"+
  " CASE WHEN sum(c.valor) >17 AND sum(c.valor)<=25 THEN 1 ELSE 0 END val4"+
  " from respuestas a"+
  " inner join detalle_respuestas b on a.ID_respuesta = b.ID_respuesta"+
  " inner join preguntas e on b.ID_pregunta = e.ID_pregunta"+
  " inner join tipo_evaluaciones d on a.ID_tipo_evaluacion = d.ID_tipo_evaluacion"+
  " inner join alternativas c on b.ID_alternativa = c.ID_alternativa"+
  " where e.ID_tipo_evaluacion = 4"+
  " AND a.ID_respuesta = ?"+
  " group by  e.ID_tipo_evaluacion"+
  " "+
  " union all"+
  " "+
  " select e.ID_tipo_evaluacion,"+
  " CASE WHEN sum(c.valor) >0 AND sum(c.valor)<=8 THEN 1 ELSE 0 END val1,"+
  " CASE WHEN sum(c.valor) >8 AND sum(c.valor)<=12 THEN 1 ELSE 0 END val2,"+
  " CASE WHEN sum(c.valor) >12 AND sum(c.valor)<=17 THEN 1 ELSE 0 END val3,"+
  " CASE WHEN sum(c.valor) >17 AND sum(c.valor)<=25 THEN 1 ELSE 0 END val4"+
  " from respuestas a"+
  " inner join detalle_respuestas b on a.ID_respuesta = b.ID_respuesta"+
  " inner join preguntas e on b.ID_pregunta = e.ID_pregunta"+
  " inner join tipo_evaluaciones d on a.ID_tipo_evaluacion = d.ID_tipo_evaluacion"+
  " inner join alternativas c on b.ID_alternativa = c.ID_alternativa"+
  " where e.ID_tipo_evaluacion = 5"+
  " AND a.ID_respuesta = ?"+
  " group by  e.ID_tipo_evaluacion"+
  " "+
  " union all"+
  " "+
  " select e.ID_tipo_evaluacion,"+
  " CASE WHEN sum(c.valor) >0 AND sum(c.valor)<=8 THEN 1 ELSE 0 END val1,"+
  " CASE WHEN sum(c.valor) >8 AND sum(c.valor)<=12 THEN 1 ELSE 0 END val2,"+
  " CASE WHEN sum(c.valor) >12 AND sum(c.valor)<=17 THEN 1 ELSE 0 END val3,"+
  " CASE WHEN sum(c.valor) >17 AND sum(c.valor)<=25 THEN 1 ELSE 0 END val4"+
  " from respuestas a"+
  " inner join detalle_respuestas b on a.ID_respuesta = b.ID_respuesta"+
  " inner join preguntas e on b.ID_pregunta = e.ID_pregunta"+
  " inner join tipo_evaluaciones d on a.ID_tipo_evaluacion = d.ID_tipo_evaluacion"+
  " inner join alternativas c on b.ID_alternativa = c.ID_alternativa"+
  " where e.ID_tipo_evaluacion = 6"+
  " AND a.ID_respuesta = ?"+
  " group by  e.ID_tipo_evaluacion";

  db.query(query, [idRespuesta,idRespuesta,idRespuesta,idRespuesta,idRespuesta,idRespuesta], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json(results);  // Return the first (and ideally only) result
  });
  
  
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
