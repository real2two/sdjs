const settings = require("./settings.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

client.on('ready', () => {
  console.log(`Bot is ready!`);
});

client.on('message', async message => {
  try {
    if (message.content.startsWith("-create ") || message.content === "-create") {
      if (message.author.id == 276497792526974996 || message.author.id == 445662417431822347) {} else {
        message.channel.send("You have no permission to run this command.")
        return
      }
      if (message.content === "-create") {
        message.channel.send("Please add arguments!")
      } else {
        fs.writeFile("commands//" + message.author.id + ".sdjs", message.content.slice(7), function(err) {
        if (err) throw err;
        });
        message.channel.send("Done! Try running `!" + message.author.id + "`.")
      }
    }
  } catch(err) {
    console.log(err)
  }
});

client.on('message', async message => {
  try {
    if (message.author.id == client.user.id) return;
    if (message.content.startsWith(settings["prefix"])) {
      let removeprefix = message.content.slice(settings["prefix"].length);
      if (removeprefix === "") return;
      
      let command = message.content.toLowerCase().split(" ")[0].toString().slice(1).toString()
      
      if (fs.existsSync(`./commands/${command}.sdjs`)) {
        
        let code = fs.readFileSync(`./commands/${command}.sdjs`).toString().split('\n');
        if (code.toString() === "") return;
        
        let lines = code.length - 1
        
        await loopCommand(client, message, code, 0, lines, "{}")
        return
      }
    }
  } catch(err) {
    console.log(err);
  }
});

client.login(settings["token"])

async function loopCommand(client, message, code, loopnum, lines, cmdvar) {
  try {
    let lineofcodetest = code[loopnum].toString();
    
    // remove space function
    test = lineofcodetest.toString()
    done = 0
    while (done == 0) {
      if (test.toString().startsWith(" ") || test.toString().startsWith("  ")) {
        test = test.toString().slice(1)
      } else {
        done = 1
      }syntax
    }
    //end function
    
    let lineofcode = test.toString().split(' ');
    let args = test.toString().slice(lineofcode[0].toString().length + 1)
    
    if (lineofcode === "") {
    } else {
      if (lineofcode[0].toString() !== "") {
        if (fs.existsSync(`./syntax/${lineofcode[0].toString()}.js`)) {
          let eventFile = await require(`./syntax/` + lineofcode[0].toString() + ".js");
          let logs = await eventFile.run(client, message, args, loopnum + 1, lines + 1); // client (discord), message (discord), args (arguments of the line in the file), loopnum (what line of code it is executing), maxlines (the amount of lines the executing code file contains)
          if (!isNaN(eventFile.loopnum)) {
            loopnum = eventFile.loopnum - 1;
            if (loopnum > lines) {
              loopnum = lines + 1
            }
            delete eventFile.loopnum
          } else {
            loopnum = loopnum + 1
          }
          if (loopnum <= lines) {
            setTimeout(() => {
              loopCommand(client, message, code, loopnum, lines, cmdvar)
            }, 1)
          }
        } else {
          console.log("Error on line " + (loopnum + 1).toString() + ": Invalid event name.")
          return
        }
      }
    }
  } catch(err) {
    console.log(err)
  }
}
