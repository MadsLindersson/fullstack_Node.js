import { navbar } from "../../components/navbar/navbar.js";

navbar();
fetchNoteLinks();

//Fetches noteLinks.html and serves it to index.html
async function fetchNoteLinks ()  {
    const response = await fetch('/components/noteLinks/notelinks.json');
    const lessons = await response.json();

            const noteCardContainer = document.getElementById("note-card-container");

            lessons.forEach(element => {
                const article = document.createElement("article");
                article.id = element.id;

                const ul = document.createElement("ul");

                const liDate = document.createElement("li");
                liDate.textContent = element.date;
                const liTopic = document.createElement("li");
                liTopic.textContent = element.topic;

                ul.append(liDate, liTopic);
                article.appendChild(ul);
                noteCardContainer.appendChild(article);
            });
}