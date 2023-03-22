import db from './db.js';

const get = (req,res) => {
    const sql = 'SELECT * FROM contacts';
    db.all(sql, [], (err, rows) => {
      if (err) 
        return res.status(500).send(err.message);
      else 
        res.send(rows);
    });  
}

const post = (req, res) => {
    const { name, company, address, phone, title } = req.body;
    const sql = 'INSERT INTO contacts (name, company, title, address, phone) VALUES (?, ?, ?, ?, ?)';
    db.run(sql, [name, company, title, address, phone], (err) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      const id = this.lastID;
      res.send({ id, name, company, address, phone });
    });
}

const put = (req, res) => {
    const { id } = req.params;
    const { name, company, address, phone, title } = req.body;
    const sql = 'UPDATE contacts SET name=?, company=?, address=?, phone=?, title=? WHERE id=?';
    db.run(sql, [name, company, address, phone, id], function(err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send({ id, name, company, address, phone });
    });
  }
  
  const del = (req, res) => {
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