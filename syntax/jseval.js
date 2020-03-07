const Discord = require("discord.js")

exports.run = (client, message, args, loopnum, maxlines) => {
  try {
    eval(args.replace(/\\n/g, "\n"))
  } catch(err) {
    console.log("Error on line " + loopnum.toString() + `: Improper usage of "eval". An error has occured while evaluating the code.`);
  }
}
