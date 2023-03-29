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
app.get('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// GET /contacts - get all contacts
app.get('/contacts', api.get);

// POST /contacts - create a new contact
app.post('/contacts', api.post);

// PUT /contacts - update a contact
app.put('/contacts', api.put);

// DELETE /contacts/:id - delete a contact
app.delete('/contacts/:id', api.del);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
