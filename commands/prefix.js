exports.run = (bot, message, args) {
  // get arguments for the command, as: !prefix +
  let args = msg.content.split(" ").slice(1);
  // change the configuration in memory
  config.prefix = args[0];

  // Now we have to save the file.
  fs.writeFile('./config.json', JSON.stringify(config), (err) => {if(err) console.error(err)});
}
}
