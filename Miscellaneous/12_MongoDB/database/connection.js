import { MongoClient } from 'mongodb';

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

const dbName = "games_library";

await client.connect();

const games_library = client.db(dbName);

export default {
    games: games_library.collection("games"),
    games_characters: games_library.collection("games_characters")
}