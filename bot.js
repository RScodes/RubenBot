const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if(err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `bot` var.
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});

bot.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  // The list of if/else is replaced with those simple 2 lines:
  let commandFile = require(`./commands/${command}.js`);
  commandFile.run(bot, message, args);
});

bot.login(config.token);
