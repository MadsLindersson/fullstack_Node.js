//Fetches navbar.html and serves it to index.html
fetch('/components/navbar/navbar.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById("navbar").innerHTML = html;
    })
    .catch(error => console.log("Error loading navbar:", error))