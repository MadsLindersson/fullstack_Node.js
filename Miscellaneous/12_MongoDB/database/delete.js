import db from './connection.js';

db.games.deleteOne({ title: "Tomb Raider 2" });