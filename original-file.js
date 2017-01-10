const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");

bot.on('ready',() => {
	console.log('I am ready!');
});



bot.on("guildMemberAdd", member =>{
	let guild = member.guild;
	guild.defaultChannel.sendMessage(`welcome ${member.user} to the land of coding`);
});

bot.on("guildCreate", guild => {
	console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user}`)      
});

bot.on("presenceUpdate", (oldMember, newMember) => {
	let guild = newMember.guild;
	let playRole = guild.roles.find("playing on the drums");
	if(!playRole) return;
	
	if(newMember.user.presence.game && newMember.user.presence.game.name === "on the drums") {
		newMember.addrole(playRole);
	} else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
		newMember.removeRole(playRole);
	}
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
	if(command === "eval")) {
		if(!msg.author.id === "226003765889597440") return;
		} else {
    			try {
      			var code = params.join(" ");
     		 	var evaled = eval(code);

      			if (typeof evaled !== "string")
       		 	evaled = require("util").inspect(evaled);

     		 	message.channel.sendCode("xl", clean(evaled));   
   			 } catch(err) {
     		 	message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
   	 }
	if (command === "gravityfalls"){
		message.channel.sendMessage("https://tenor.co/xwJL.gif");
	} 
	if command === "purge")) {
		let modRole = message.guild.roles.find("name", "ADMIN");
		if(!message.member.roles.has(modRole.id)) {
			return message.reply("pleb ur not admin")
		}
		let messagecount = parseInt(params[0]);
		message.channel.fetchMessages({limit: messagecount})
		.then(messages => message.channel.bulkDelete(messages));
	}
	if (command === "kick") {
		let modRole = message.guild.roles.find("name", "ADMIN");
		if(!message.member.roles.has(modRole.id)) {
			return message.reply("pleb ur not admin")
		}
		if(message.mention.user.size === 0) {
			return message.reply("please mention a user to kick");
		}
		let kickMember = message.guild.member(message.mentions.users.first());
		if(!kickMember) {
			return message.reply("that user dont exist bOi");
		}
		if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
			return message.reply("i dont have the permission (KICK_MEMBER) to do this :sadface:")
		}
		kickMember.kick();
	}


});




bot.login(config.token);

