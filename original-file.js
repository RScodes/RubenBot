const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");

bot.on('ready',() => {
	console.log('I am ready!');
});

bot.on('message', message => {
	if(message.author.bot) return;
	if(!message.content.startsWith(config.prefix))return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(config.prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping"){
		message.channel.sendMessage("Hello my faggot dude").catch(console.error);
	}
	
	if (command === "pussy") {
		message.channel.sendMessage("You dirty minded Bastard http://pre13.deviantart.net/8539/th/pre/i/2011/327/7/5/pussy_cat_ii_by_antiplod-d4h254m.jpg").catch(console.error);
	}	
		
	if (command === "mother") {
		message.channel.sendMessage("protect Mother Russia at all costs by killing Gerrmens").catch(console.error);
	}
	if (command === "giveme"){
		
		message.channel.sendMessage("https://github.com/rscodes/eeb2-bot").catch(console.error);
	}
	if(command === "prune") {
		let modRole = message.guild.roles.find("name", "ADMIN");
		let userToKick = message.mentions.users.first();
		if(!message.member.roles.has(modRole.id)) {
			return message.reply("pleb ur not admin").catch(console.error);
		}
		// get number of messages to prune
		let messagecount = parseInt(params[0]);
		// get the channel logs
		message.channel.fetchMessages({limit: 100})
		.then(messages => {
		let msg_array = messages.array();
		// filter the message to only your own
		msg_array = msg_array.filter(m => m.author.id === bot.user.id);
		// limit to the requested number + 1 for the command message
		msg_array.length = messagecount + 1;
		// Has to delete messages individually. Cannot use `deleteMessages()` on selfbots.
		msg_array.map(m => m.delete().catch(console.error));
		});
	}
	if (command === "purge") {
		let messagecount = parseInt(params[0]);
		message.channel.fetchMessages({limit: messagecount})
		.then(messages => message.channel.bulkDelete(messages));
	}
	if (command === "addrole") {
		let modRole = message.guild.roles.find("name", "ADMIN");
		let userToKick = message.mentions.users.first();
		if(!message.member.roles.has(modRole.id)) {
			return message.reply("pleb ur not admin").catch(console.error);
		}
		let role = msg.guild.roles.find("name", "Team Mystic");
		// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
		let member = msg.guild.member(msg.mentions.users.first());
		// or the person who made the command: let member = msg.member;
		// Add the role!
		member.addRole(role).catch(console.error);
		// Remove a role!
		member.removeRole(role).catch(console.error);
	}
	if (command === "say"){
		message.channel.sendMessage(args.join(" ")).catch(console.error);
	}
	if (command === "kick") {
		let modRole = message.guild.roles.find("name", "ADMIN");
		let userToKick = message.mentions.users.first();
		if(!message.member.roles.has(modRole.id)) {
			return message.reply("pleb ur not admin").catch(console.error);
		}
		if(message.mention.user.size === 0) {
			return message.reply("please mention a user to kick").catch(console.error);
		}
		let kickMember = message.guild.member(message.mentions.users.first());
		if(!kickMember) {
			return message.reply("that user dont exist bOi").catch(console.error);
		}
		if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
			return message.reply("i dont have the permission (KICK_MEMBER) to do this :sadface:").catch(console.error);
		}
		//we need to get a *GuildMember* object, mentions are only users. Then, we kick!
		message.guild.member(userToKick).kick().then(member => {
			message.reply(`${member.user.username} was kicked.`).catch(console.error);
		});
	}
	if (command === "newrole") {
		let modRole = message.guild.roles.find("name", "ADMIN");
		let userToKick = message.mentions.users.first();
		if(!message.member.roles.has(modRole.id)) {
			return message.reply("pleb ur not admin").catch(console.error);
		}
		let args = message.content.split(" ").slice(1);
		let color = args[0];
		let hoist = args[1] === "yes" || args[1] === "true" ? true : false; // google "ternary if javascript"
		let rolename = args.slice(2).join(" "); // remove first 2 args, then join array with a space
		guild.createRole()
		.then( newrole => {
		newrole.edit({hoist: hoist, name: rolename, color: color})
		}).catch(console.error);
	}
       if (command === "eval") {
		if(message.author.id !== "226003765889597440") return;
		try {
			var code = args.join(" ");
			var evaled = eval(code);

			if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);

			message.channel.sendCode("xl", clean(evaled));   
		} catch(err) {
		 	message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
		}
	}
}); // END message handler

function clean(text) {
	if (typeof(text) === "string")
		return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
}

bot.login(config.token);

