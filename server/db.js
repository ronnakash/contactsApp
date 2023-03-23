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
                    ["John Doe", "ABC Company", "Manager", "123 Main St, Anytown, USA", "555-1234"],
                    ["Jane Smith", "XYZ Inc.", "CEO", "456 Park Ave, Anytown, USA", "555-5678"],
                    ["Bob Johnson", "DEF Corp.", "Engineer", "789 Elm St, Anytown, USA", "555-9012"],
                    ["Sally Brown", "GHI Ltd.", "Designer", "246 Oak St, Anytown, USA", "555-3456"],
                    ["Mike Davis", "JKL Industries", "Sales Rep", "135 Pine St, Anytown, USA", "555-7890"]
                ];
                const sql = `INSERT INTO contacts(name, company, title, address, phone) VALUES (?, ?, ?, ?, ?)`;
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