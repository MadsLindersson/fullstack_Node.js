"use strict"
import fs from 'fs';
import express from 'express';
import { marked } from "marked";


const indexPage = fs.readFileSync('./public/pages/index/index.html', 'utf-8');
const notePage = fs.readFileSync('./public/pages/notePage/notePage.html', 'utf-8');

const app = express();
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send(indexPage);
}); 

app.get("/notes/:fileName", async (req, res) => {
    const filePath = `./notes/${req.params.fileName}.md`;

    try {
        const mdFile = await fs.promises.readFile(filePath, 'utf-8');
        const html = marked.parse(mdFile);
        const page = notePage.replace("$$MARKDOWN_FILE$$", html);
        res.send(page);
    } catch (err) {
        res.status(404).send('Note not found:', err);
    }
});

/* export default function handler(req, res) {
  res.status(200).send("Hello from Vercel!");
} */

const PORT = 8080;
app.listen(PORT, () => {
    console.log("The server is running on port:", PORT);    
});