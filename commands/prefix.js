exports.run = (bot, message, args) => {
  let modRole = message.guild.roles.find("name", "ADMIN");
	let userToKick = message.mentions.users.first();
	if(!message.member.roles.has(modRole.id)) {
		return message.reply("pleb ur not admin").catch(console.error);
	}
  let args = message.content.split(" ").slice(1);
  // change the configuration in memory
  config.prefix = args[0];

  // Now we have to save the file.
  fs.writeFile('./config.json', JSON.stringify(config), (err) => {if(err) console.error(err)});
}
