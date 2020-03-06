const Discord = require("discord.js")

exports.run = (client, message, args, loopnum, maxlines) => {
  actualargs = message.content.toString().slice(message.content.split(' ')[0].length + 1).toString()
  if (args == "") {
    console.log("Error on line " + loopnum.toString() + `: Improper usage of "ifargs". Must include "goto" or "else".`);
    return
  } else {
    lineargs = args;
    if (lineargs.startsWith("goto ")) {
      lineargs = lineargs.slice(4);
      if (lineargs == "") {
        console.log("Error on line " + loopnum.toString() + `: Improper usage of "ifargs". No number has been input.`);
        return
      } else {
        if (isNaN(parseFloat(lineargs))) {
          console.log("Error on line " + loopnum.toString() + `: Improper usage of "ifargs". Please enter a valid number.`);
          return
        } else {
          if ((actualargs.length !== 0)) {
            exports.loopnum = parseFloat(lineargs);
          }
          return
        }
      }
    } else if (lineargs.startsWith("else ")) {
      lineargs = lineargs.slice(5);
      if (lineargs == "") {
        console.log("Error on line " + loopnum.toString() + `: Improper usage of "ifargs". No number has been input.`);
        return
      } else {
        if (isNaN(parseFloat(lineargs))) {
          console.log("Error on line " + loopnum.toString() + `: Improper usage of "ifargs". Please enter a valid number.`);
          return
        } else {
          if (actualargs.length == 0) {
            exports.loopnum = parseFloat(lineargs);
          }
          return
        }
      }
    }
    console.log("Error on line " + loopnum.toString() + `: Improper usage of "ifargs". Must include "goto" or "else".`);
  }
}
