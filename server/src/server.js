import express from 'express'
import api from './api.js'
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// enable CORS
app.use(cors({
  origin: '*',
  allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization'],
  methods: ['PUT', 'POST', 'PATCH', 'DELETE', 'GET']
}));

// set CORS headers for preflight requests from browsers
app.options('*', function(req, res, next) {
  console.log("preflight");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// hello message
app.get('/', (req, res) => {
  res.send("Hello!");
});


// app.options('*', cors());

// GET /contacts - get all contacts
app.get('/contacts', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  api.get(req, res);
});


// POST /contacts - create a new contact
app.post('/contacts', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  api.post(req, res);
});

// PUT /contacts - update a contact
app.put('/contacts', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  api.put(req, res);
});

// DELETE /contacts/:id - delete a contact
app.delete('/contacts', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  api.del(req, res);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
