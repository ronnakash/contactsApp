import db from './db.js';
import axios from 'axios'

const get = async (req,res) => {
    const sql = 'SELECT * FROM contacts';
    db.all(sql, [], (err, rows) => {
      if (err) 
        return res.status(500).send(err.message);
      else 
        res.send(rows);
    });  
}

const post = async (req, res) => {
  const { name, company, address, phone, title } = req.body;
  try {
    // Make a request to the API to get a random face image
    const response = await axios.get('https://api.lorem.space/image/face?w=200&h=200');
    const image = response.data.url;

    const sql = 'INSERT INTO contacts (name, company, title, address, phone, image) VALUES (?, ?, ?, ?, ?, ?)';
    db.run(sql, [name, company, title, address, phone, image], function(err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      const id = this.lastID;
      res.send({ id, name, company, address, phone, image });
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const put = async (req, res) => {
    const { id, name, company, address, phone, title } = req.body;
    const sql = 'UPDATE contacts SET name=?, company=?, address=?, phone=?, title=? WHERE id=?';
    db.run(sql, [name, company, address, phone, title, id], function(err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send({ id, name, company, address, phone });
    });
  }
  
  const del = async (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM contacts WHERE id=?';
    db.run(sql, id, function(err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send({ id });
    });
  }
  

export default {get, post, put, del}