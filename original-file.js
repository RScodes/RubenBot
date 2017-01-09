const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'MjY3NjY1NzYzNTQyNzYxNDcz.C1PjAg.uqpAU7NMP8mmaISIkWkix8ODKQc';

bot.on('ready',() => {
	console.log('I am ready!');
});

const prefix = "??";

bot.on('message', message => {
	if(message.author.bot) return;
	if(!message.content.startsWith(prefix))return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
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




bot.login(token);

