export function navbar() {
    const navBarDiv = document.getElementById("navbar");

    const logoLink = document.createElement("a"); // wrap logo in a link
    logoLink.href = "/"; // path to home
    logoLink.className = "logo"; // reuse the logo class for styling

    const logoImg = document.createElement("img");
    logoImg.src = "/images/ClassNotesLogo.png";
    logoImg.alt = "ClassNotes Logo";

    logoLink.appendChild(logoImg);
    navBarDiv.appendChild(logoLink);
}
