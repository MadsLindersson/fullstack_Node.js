import fs from 'fs';

export function constructPage(pageContent, options) {
    const footer = readPage("./public/components/footer/footer.html");
    const header = readPage("./public/components/header/header.html");

    return header.replace('$$TAB_TITLE$$', options.tabTitle) +
    header + 
    pageContent + 
    footer
}

export function readPage(path) {
    return fs.readFileSync(path).toString();
}