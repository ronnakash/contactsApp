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
        phone TEXT NOT NULL)`
    );
    return db;
}

export default initDatabase();