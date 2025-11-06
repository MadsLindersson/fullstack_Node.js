/* new Promise ((resolve, reject) => {
    setTimeout(() => {
        try{
            throw "oh no!!!";
            resolve("Alles good");
        } catch (error) {
            reject(error);
        }
    }), 2000
})
.then((message) => console.log(message))
.catch((error) => {console.log(error);
}) */

function myPromise ()   {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                /* throw new Error ("No good"); */
                resolve("Vey good");
            } catch (error) {
                reject(error);
            }
        }, 3000);
    });
}

/* myPromise()
.then((message) => {
    console.log(message);
})
.catch((error) => console.log(error)); */

const succesMessage = await myPromise();