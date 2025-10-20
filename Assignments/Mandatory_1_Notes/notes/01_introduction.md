# Introduction

## Working with the terminal and Git
`cd <name>` to enter a directory.

`cd..` to go one directory up.

`mkdir` to create er new directory.

`code` to open a directory in vsCode.

**Use tab!** It auto fills and makes use of the terminal alot faster.

`git add .` || `git add -A` to add either everything in this directory and all subdectories || add all directories.

`git commit -m "Message"` to commit.

`git push` to push.

`git pull` to pull from the branch you're in.

`check out <branchName>` to checkout a branch.

## Javascript data types
```js
String
Number
Boolean
Undefined
Null
Symbol
BigInt
```

**Don't!** use the "+" symbol when concatenating Strings. This can accidently result in unwanted type coercion. 

```js
'5' + 2 // "52" String
'5' - 2 // 3 Number
```

JavaScript tries to guess what it is you mean, this can lead to bugs. 

To avoid accidental type coercion: 
- Use "," instead of "+" when writing Strings.
- Use template literals '${'5'} + ${2}' // 5 + 2
- Convert types using: 
    - Number()
    - String()
    - Boolean()
    etc.
- Use Strict equality === instead of ==

## Node.js
**Node.js** is a runtim enviroment that lets you run JavaScript outside the browser, so on a computer or a server.

You can execute a Node.js project using the command `node <fileName.js>` in the terminal.

## Rest API design
It is important to use the correct HTTP verb when designing a Rest API and ordering them the right way.

The order is as follows: `GET, POST, PUT, PATCH, DELETE`.

The naming of the URL is also very important. Is is always in plural and **without!** the HTTP verb in the name, this is given by the verb itself.

A design for a greek gods Rest API could like like this:

| HTTP Verb | URL                 | Operation               |
|-----------|------------------- |------------------------ |
| GET       | `/greekGods`        | Retrieve all Greek gods |
| GET       | `/greekGods/{id}`   | Retrieve a Greek god    |
| POST      | `/greekGods`        | Create a Greek god      |
| PUT       | `/greekGods/{id}`   | Update a Greek god      |
| DELETE    | `/greekGods/{id}`   | Delete a Greek god      |

## Ways to get clean code
- Use a linter such as EsLint. Optionally use prettier too.
- Use the String "use strict" at the top of your .js files.