export async function getMatches(amountOfMatches = 5) {
    console.log(amountOfMatches);
    
    const promises = [];

    for (let i = 0; i < promises; i++)  {
        const promise = fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json);

        promises.push(promise);
    }
    const results = await Promise.all(promises);
    const matches = results.map((result) => ({ imageURL: result.message }));
    
    return matches;
}

console.log(await getMatches());
 