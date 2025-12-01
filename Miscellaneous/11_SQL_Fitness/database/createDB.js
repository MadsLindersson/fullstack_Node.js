import db from './connection.js';

const deleteMode = process.argv.includes('delete');

if (deleteMode) {
    db.exec(`DROP TABLE IF EXISTS excercises;`);
    db.exec(`DROP TABLE IF EXISTS users;`);
}
db.exec(`
    CREATE TABLE IF NOT EXISTS users ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        username VARCHAR(50) UNIQUE,
        role TEXT CHECK ( role IN ("ADMIN", "STAFF", "USER") )
    );

    CREATE TABLE IF NOT EXISTS excercises (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT current_timestamp,
        difficulty INTEGER,
        user_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES users (id)
    );
`);

if(deleteMode)  {
    db.run(`INSERT INTO users(username, role) VALUES ('Anders', 'STAFF');`);
    db.run(`INSERT INTO excercises (name, difficulty, user_id) VALUES ('squat', 7, 1);`);
    db.run(`INSERT INTO excercises (name, difficulty, user_id) VALUES ('burpee', 6, 1);`);
}

