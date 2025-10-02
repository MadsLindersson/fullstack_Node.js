const dogMatchesImageContainerDiv = document.getElementById("dog-matches-image-container");

function getMatches() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json)
    .then((result) => {
        const dog = {
            imageURL: result.messsage
        }
        createMatchesProfile(dog);
    })
}

getMatches();

function createMatchesProfile (dog) {
    const dogMatchesImageImg = document.createElement("img");
    dogMatchesImageImg.src = dog.imageURL;
    dogMatchesImageImg.alt = "Dog match profile picture";
    dogMatchesImageImg.id = "dog-Matches-Image";
    
    dogMatchesImageContainerDiv.appendChild(dogMatchesImageImg);
}
