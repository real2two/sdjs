const Discord = require("discord.js")

exports.run = (client, message, arguments, loopnum, maxlines) => {
  args = arguments.toString().replace(/ +(?= )/g,'').toString().split(' ');
  if (args[0] === undefined) {
    console.log("Error on line " + loopnum.toString() + `: Improper usage of "goto". There should be one argument.`);
    return;
  } else {
    if (args[1] === undefined) {
      number = parseFloat(args[0].toString(), 10)
      if (isNaN(number)) {
        console.log("Error on line " + loopnum.toString() + `: Improper usage of "goto". The first argument should be a number.`);
        return;
      } else {
        if (number > maxlines) {
          console.log("Error on line " + loopnum.toString() + `: Improper usage of "goto". The first argument cannot be passed the max lines of the file.`);
          return;
        } else {
          exports.loopnum = number;
        }
      }
    } else {
      console.log("Error on line " + loopnum.toString() + `: Improper usage of "goto". There should not be a second argument.`);
      return;
    }
  }
}
