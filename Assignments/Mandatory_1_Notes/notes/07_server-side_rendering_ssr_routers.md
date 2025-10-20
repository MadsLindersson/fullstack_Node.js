## App memory and efficiency

Depending on your application, you can go with server side rendering (SSR) or client side rendering (CSR). 

### Server side rendering

This is where the server loads all the HTML before sending it to the client, this makes the application faster on the client side, but the server uses more memory. 

Server side rendering also does not have to deal with CORS.

### Client side rendering

This is where the client downloads a mostly empty HTML file and then renders it with JavaScript. This makes it slower on the client side, but the server just serves data and is therefore using less memory.

## Project structure

It is important to think about the structure of your project to make working as effecient and easy as possible. Having bad structure can easily lead to not understanding the project and bugs. This will slow down development. 

You should always try to make files as small as possible while remaining true to their use. Try to not mix responsibilities in one file. 

Think about splitting the API and the static files apart, this is both easier structure but also a security mitigation.