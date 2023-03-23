import sqlite3 from 'sqlite3';


const initDatabase = () => {
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
        image TEXT,
        title TEXT NOT NULL,
        address TEXT NOT NULL,
        phone TEXT NOT NULL)`, (err) => {
        if (err) console.error(err.message);
        else {
            // Check if the table is empty
            db.get(`SELECT COUNT(*) AS count FROM contacts`, [], (err, row) => {
            if (err) 
                console.error(err.message);
            else {
                // If the table is empty, insert some initial data
                if (row.count === 0) {
                console.log('Inserting initial data into the contacts table...');
                const initialData = [
                    ["John Doe", "ABC Company", "Manager", "123 Main St, Anytown, USA", "555-1234", "https://cdn.lorem.space/images/face/.cache/200x200/julian-wan-WNoLnJo7tS8-unsplash.jpg"],
                    ["Jane Smith", "XYZ Inc.", "CEO", "456 Park Ave, Anytown, USA", "555-5678", "https://cdn.lorem.space/images/face/.cache/200x200/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"],
                    ["Bob Johnson", "DEF Corp.", "Engineer", "789 Elm St, Anytown, USA", "555-9012", "https://cdn.lorem.space/images/face/.cache/200x200/sam-burriss-jTSf1xnsoCs-unsplash.jpg"],
                    ["Sally Brown", "GHI Ltd.", "Designer", "246 Oak St, Anytown, USA", "555-3456", "https://cdn.lorem.space/images/face/.cache/200x200/rowan-freeman-G-4OXlHo86o-unsplash.jpg"],
                    ["Mike Davis", "JKL Industries", "Sales Rep", "135 Pine St, Anytown, USA", "555-7890", "https://cdn.lorem.space/images/face/.cache/200x200/nrd-ZmmAnliy1d4-unsplash.jpg"],
                    ["Mike Ravid", "fdsfsdf Industries", "Sales Rep", "135 Pine St, Anytown, USA", "555-7890", "https://cdn.lorem.space/images/face/.cache/200x200/behrouz-sasani-khMxnuosSV4-unsplash.jpg"]

                ];
                const sql = `INSERT INTO contacts(name, company, title, address, phone, image) VALUES (?, ?, ?, ?, ?, ?)`;
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

export default initDatabase();