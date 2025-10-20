const noteCardContainer = document.getElementById("note-card-container");
const noteLinks = noteCardContainer.querySelectorAll("a");
const noteModal = document.getElementById("noteModal");

/* noteLinks.forEach((link) => {
    link.addEventListener("click", async (e) => {
        e.preventDefault();
        const url = link.getAttribute("href");

        try  {
            const response = await fetch(url);
            const html = await response.text();

            noteModal.innerHTML = html;

            noteModal.style.display = "flex";
        } catch {
            noteModal.textContent = "Could not find note";
            noteModal.style.display = "flex";
        }
    })
    
}); */
