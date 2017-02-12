const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");

bot.on('ready',() => {
	console.log('I am ready!');
});

bot.on("guildMemberAdd", member =>{
	let guild = member.guild;
	guild.defaultChannel.sendMessage(`welcome ${member.user} to the land of coding`).catch(console.error);
});

bot.on("guildMemberRemove", member => {
	let guild = member.guild;
	guild.defaultChannel.sendMessage(`goodbye ${member.user}.`).catch(console.error);
});

bot.on("guildCreate", guild => {
	console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user}`).catch(console.error);      
});

bot.on('message', message => {
	if(message.author.bot) return;
	if(!message.content.startsWith(config.prefix))return;
	let channel = message.channel;
	let guild = message.guild;
	let text = message.content;
	let command = message.content.split(" ")[0];
	command = command.slice(config.prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	let commandFile = require(`./commands/${command}.js`);
	commandFile.run(bot, message, args);
	
}); // END message handler



bot.login(config.token);

