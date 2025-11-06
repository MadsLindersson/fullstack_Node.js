import { readPage, constructPage } from './templateEngine.js'

//Pages ---------------------------------------------------------------------------------
const frontPage = readPage("./public/pages/frontend/index.html");
export const frontPagePage = constructPage(frontPage, {
    tabTitle: "DogInder | Welcome"
});

const matchesPage = readPage("./public/pages/matches/matches.html");
export const matchesPagePage = constructPage(matchesPage, {
    tabTitle: "DogInder | Matches"
});

const contact = readPage("./public/pages/contact/contactPage.html");
export const contactPage = constructPage(contact, {
    tabTitle: "DogInder || Contact"
});


