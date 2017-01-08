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
	
	if (message.content.startsWith(prefix + "ping")) {
		message.channel.sendMessage("Hello my faggot dude");
	}
	
	if (message.content.startsWith(prefix + "pussy")) {
		message.channel.sendMessage("You dirty minded Bastard https://www.google.be/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwii-a-i67LRAhWLExoKHXweANUQjRwIBw&url=http%3A%2F%2Fantiplod.deviantart.com%2Fart%2FPussy-Cat-II-270518134&psig=AFQjCNFi8CwqyL8QEzmMLPDYV5CuVznCvA&ust=1483974847772996")
		
	if(message.content.startsWith(prefix+"eval")) {
      try {
        var code = params.join(" ");
        var evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

        message.channel.sendCode("xl", clean(evaled));   
      } catch(err) {
        message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
}
});




bot.login(token);
