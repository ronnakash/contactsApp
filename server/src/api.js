import db from './db.js';
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();

const get = async (req,res) => {
    const sql = 'SELECT * FROM contacts';
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err.message);
      }
      else {
        res.send(rows);
      }
    });  
}

const post = async (req, res) => {
  const { name, company, address, phone, title } = req.body;
  try {
    const image = await randomImage();
    const {lat, lng} = await getGoogleCoords(address)
    const sql = 'INSERT INTO contacts (name, company, title, lat, lng, address, phone, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.run(sql, [name, company, title, lat, lng, address, phone, image], function(err) {
      if (err) {
        console.error(err);
        return res.status(500).send(err.message);
      }
      const id = this.lastID;
      res.send({ id, name, company, address, phone, lat, lng, image, title });
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const put = async (req, res) => {
  const { id, name, company, address, phone, title } = req.body;
  const {lat, lng} = await getGoogleCoords(address)
  const sql = 'UPDATE contacts SET name=?, company=?, address=?, lat=?, lng=?, title=phone=?, title=? WHERE id=?';
  db.run(sql, [name, company, address, phone, title, id], function(err) {
    if (err) {
      console.error(err);
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
      console.error(err);
      return res.status(500).send(err.message);
    }
    res.send({ id });
  });
}

const randomImage = async () => {
    // Make a request to the API to get a random face image
    const response = await axios.get('https://api.lorem.space/image/face?w=200&h=200');
    return response.request.res.responseUrl;
}

const getGoogleCoords = async (address) => {
  try {
    const apiKey = process.env.MY_GOOGLE_API_KEY;
    console.log(apiKey);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
    console.log(url);
    const response = await axios.get(url);
    console.log(response.data);
    const location = response.data.results[0].geometry.location;
    console.log(location);
    return location;
  }
  catch (err) {
    console.error(err);
    return {lat: 0, lng: 0};
  }
}


export default {get, post, put, del}