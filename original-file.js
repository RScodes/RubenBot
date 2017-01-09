const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");

bot.on('ready',() => {
	console.log('I am ready!');
});

bot.on("guildMemberAdd", member =>{
	let guild = member.guild;
	guild.default.channel.sendMessage("welcome " + member.user.username + " to the land of coding");
});

bot.on('message', message => {
	if(message.author.bot) return;
	if(!message.content.startsWith(config.prefix))return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(config.prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "add") {
		let numArray = args.map(n=> parseInt(n));
		let total = numArray.reduce( (p, c) => p+c);
		
		message.channel.sendMessage(total);
	}
	if (command === "say"){
		message.channel.sendMessage(args.join(" "));
	}
	if (command === "ping"){
		message.channel.sendMessage("Hello my faggot dude");
	}
	
	if (command === "pussy") {
		message.channel.sendMessage("You dirty minded Bastard http://pre13.deviantart.net/8539/th/pre/i/2011/327/7/5/pussy_cat_ii_by_antiplod-d4h254m.jpg");
	}	
		
	if (command === "mother") {
		message.channel.sendMessage("protect Mother Russia at all costs by killing Gerrmens");
	}
}	
}
});




bot.login(config.token);

