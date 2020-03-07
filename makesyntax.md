# What are syntaxes?

They are what you use in the ".sdjs" files. Like "send", "sendembed" and "stop" are all syntaxes.

# Making the file
In order to make a syntax, you need to make a file in the folder "syntax".

The file name should be the syntax name and ends with ".js".

In the file, this is a simple layout of how it should look like:
```js
const Discord = require("discord.js")

exports.run = (client, message, parameters, loopnum, maxlines) => {
  // add code here
}
```

# Variables

Variables are used to get and change data.

## Main Variables

These main variable have no effect on the actual bot process.

Because SDJS uses discord.js, some of these variables may be familiar to discord.js developers.

```
client - Defines the client variable. (discord.js)
message - Defines the message varaible. (discord.js)
parameters - It shows the arguments/parameters, which is listed after the syntax name if used in a "sdjs" script.
loopnum - A variable showing the loop number / line of the file of the "sdjs" file running the process.
maxlines - The maximum lines the "sdjs" file running has.
```

## Global Variables

These global variables may effect the actual bot process.

Global variables may be a bad practice in javascript, yet there would not be another simple way to transfer variables from the syntax files to the main process.

There is currently only 1 global variable.

```
exports.loopnum - Used to change the next file line the process will run. This is used to jump to another piece of code or making a multiple line syntax name.
```

# Tips and Tricks

Here are some tips and tricks you might want to use.

## Splitting the parameters into arguments:

You can use the `.split(variable)` to split up the parameters.

For example:

```js
const Discord = require("discord.js")

exports.run = (client, message, parameters, loopnum, maxlines) => {
  let para = parameters.split(" ");
  if (para[0]) {
    if (para[1]) {
      console.log("Error on line " + loopnum.toString() + `: Improper usage of "syntaxnamehere". There should not be a second parameter.`);
    } else {
      if (para[0].toString() == true) {
        message.channel.send("true")
      } else {
        message.channel.send("false")
      }
    }
  } else {
    console.log("Error on line " + loopnum.toString() + `: Improper usage of "syntaxnamehere". There must be a first parameter.`);
  }
}
```

## Getting the command arguments.

There is not a way to retrieve the command arguments within the main bot process so here is a simple line of code you can use in your syntax file.

```js
let arguments = message.content.toString().slice(message.content.split(' ')[0].length + 1).toString();
```

