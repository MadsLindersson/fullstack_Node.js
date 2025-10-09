export function navbar ()  {
    const navBarDiv = document.getElementById("navbar");

    const divLogo = document.createElement("div");
    divLogo.className = "logo";
    const logoImg = document.createElement("img");
    logoImg.src = "/images/ClassNotesLogo.png";
    logoImg.alt = "ClassNotes Logo";

    const ul = document.createElement("ul");
    ul.className = "nav-links";
    const liHome = document.createElement("li");
    liHome.textContent = "Home"
    const liAllNotes = document.createElement("li");
    liAllNotes.textContent = "All notes"
    

    divLogo.append(logoImg);
    ul.append(liHome, liAllNotes);
    navBarDiv.append(divLogo, ul);
}