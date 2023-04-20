import sqlite3 from 'sqlite3';
import api from './api.js';

const initDatabase = async () => {
    const db = new sqlite3.Database('./contacts.db', (err) => {
            if (err) 
                console.error(err.message);
            else
                console.log('Connected to the contacts database.');
        });

    // Create a contacts table if it does not exist
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        company TEXT NOT NULL,
        lat DECIMAL(3,10),
        lng DECIMAL(3,10),
        image TEXT NOT NULL,
        title TEXT NOT NULL,
        address TEXT NOT NULL,
        phone TEXT NOT NULL)`, (err) => {
        if (err) console.error(err.message);
        else {
            // Check if the table is empty
            db.get(`SELECT COUNT(*) AS count FROM contacts`, [], async (err, row) => {
            if (err) 
                console.error(err.message);
            else {
                // If the table is empty, insert some initial data
                if (row.count === 0) {
                console.log('Inserting initial data into the contacts table...');
                const images = await Promise.all(Array.from({ length: 6 }, api.randomImage));
                const initialData = [
                    ["Emily Garcia", "Smith & Sons", "Manager", "123 Main St, Boise, Idaho, USA", 10, 11, "555-1234", images[0]],
                    ["James Lee", "Johnson & Co.", "CEO", " 488 Laurel Lee, Burnsville, Minnesota, USA", 11, 12, "555-5678", images[1]],
                    ["Sophia Rodriguez", "Davis Design", "Engineer", "3373 Fantages Way, Strong, Maine, USA", 12, 13, "555-9012", images[2]],
                    ["Liam Martinez", "Brown Enterprises", "Designer", "4861 Todds Lane, San Antonio, Texas, USA", 13, 14, "555-3456", images[3]],
                    ["Olivia Davis", "Clarkson & Partners", "Sales Rep", "2436 Ottis Street, Oklahoma City, Oklahoma, USA", 14, 15, "555-7890", images[4]],
                    ["William Anderson", "Johnson Enterprises", "Sales Rep", "1394 Hawks Nest Lane, San Antonio, Texas, USA", 15, 16, "555-7890", images[5]]
                  ];                  
                const sql = `INSERT INTO contacts(name, company, title, address, lat, lng, phone, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
                initialData.forEach(data => {
                    db.run(sql, data, err => {
                    if (err) console.error(err.message);
                    });
                });
                }
            }
            });
        }
    });
    return db;
}

export default (await initDatabase());