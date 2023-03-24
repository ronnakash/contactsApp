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
        lat DECIMAL(3,10) NOT NULL,
        lng DECIMAL(3,10) NOT NULL,
        image TEXT NOT NULL,
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
                    ["John Doe", "ABC Company", "Manager", "123 Main St, Boise, Idaho, USA", 10, 11, "555-1234", "https://cdn.lorem.space/images/face/.cache/200x200/julian-wan-WNoLnJo7tS8-unsplash.jpg"],
                    ["Jane Smith", "XYZ Inc.", "CEO", " 488 Laurel Lee, Burnsville, Minnesota, USA", 11, 12, "555-5678", "https://cdn.lorem.space/images/face/.cache/200x200/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"],
                    ["Bob Johnson", "DEF Corp.", "Engineer", "3373 Fantages Way, Strong, Maine, USA", 12, 13, "555-9012", "https://cdn.lorem.space/images/face/.cache/200x200/sam-burriss-jTSf1xnsoCs-unsplash.jpg"],
                    ["Sally Brown", "GHI Ltd.", "Designer", "4861 Todds Lane, San Antonio, Texas, USA", 13, 14, "555-3456", "https://cdn.lorem.space/images/face/.cache/200x200/rowan-freeman-G-4OXlHo86o-unsplash.jpg"],
                    ["Mike Davis", "JKL Industries", "Sales Rep", "2436 Ottis Street, Oklahoma City, Oklahoma, USA", 14, 15, "555-7890", "https://cdn.lorem.space/images/face/.cache/200x200/nrd-ZmmAnliy1d4-unsplash.jpg"],
                    ["Mike Ravid", "fdsfsdf Industries", "Sales Rep", "1394 Hawks Nest Lane, San Antonio, Texas, USA", 15, 16, "555-7890", "https://cdn.lorem.space/images/face/.cache/200x200/behrouz-sasani-khMxnuosSV4-unsplash.jpg"]

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

export default initDatabase();