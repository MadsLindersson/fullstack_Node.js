import db from './connection.js';

db.games.updateOne({ title: "Counter Strik" }, { $set: { price: "5" }});