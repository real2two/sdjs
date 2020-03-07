// not to be used, this is for testing purposes only

const Discord = require("discord.js")

exports.run = (client, message, args, loopnum, maxlines) => {
  let arguments = message.content.toString().slice(message.content.split(' ')[0].length + 1).toString();
  message.channel.send("Arguments: " + arguments)
}
