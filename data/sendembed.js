const Discord = require("discord.js")

exports.run = (client, message, arguments, loopnum, maxlines) => {
  embedinfo = arguments.split(" | ");
  if (embedinfo[2]) {
    let title = embedinfo[0]
    let color = embedinfo[1]
    let description = arguments.toString().slice(arguments.length - (arguments.toString().length - embedinfo[0].toString().length - embedinfo[1].toString().length - 6))
    let embed = new Discord.MessageEmbed()
      .setAuthor(title)
      .setColor(color)
      .setDescription(description)
    message.channel.send({embed});
  } else {
    console.log("Error on line " + loopnum.toString() + `: Improper usage of "send". There should be at least three arguments which are spearted with "|"s.`);
  }
}
