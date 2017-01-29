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
	
	 if (command == "ping") {
		// msg.delete()
		startTime = Date.now();
		channel.sendMessage("Pinging...").then((msg) => {
		endTime = Date.now();
		msg.edit("Yes im on and its been **=>** *" + Math.round(endTime - startTime) + "* ms since you had to say ping");
		});
	}
	if (command === 'embed') {
		let modRole = message.guild.roles.find("name", "ADMIN");
		if(!message.member.roles.has(modRole.id)) {
			return message.reply("pleb ur not admin").catch(console.error);
		}
		let args = message.content.split(" ").slice(1);
		let text = args[0];
		message.channel.sendEmbed({
			color: 0xFFFFFF,
			title: args.join(`${text}`),
		});
	}
	if (command === "add") {
		let numArray = args.map(n=> parseInt(n));
		let total = numArray.reduce( (p, c) => p+c);
		
		message.channel.sendMessage(total).catch(console.error);
	}
	if (command == "purge") {
		var amount = parseInt(args[1]);
		msg.channel.fetchMessages({limit: amount})
		.then(messages => {
			messages.map(msg => msg.delete().catch(console.error) );
		}).catch(console.error);
	} else if (command == "clear") { //p delets your messages. purge deletes everyones messages.
			let delamount = parseInt(args[1]) ? parseInt(args[1]) : 1;
			msg.channel.fetchMessages({limit: 100})
			.then(messages => {
				msgar = messages.array();
				msgar = msgar.filter(msg => msg.author.id === bot.user.id);
				msgar.length = delamount + 1;
				msgar.map(msg => msg.delete().catch(console.error));
		});
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
	}
	if (command === "say"){
		message.channel.sendMessage(args.join(" ")).catch(console.error);
	}
	if (command === "purge") {
		let modRole = message.guild.roles.find("name", "ADMIN");
		if(!message.member.roles.has(modRole.id)) {
			return message.reply("pleb ur not admin").catch(console.error);
		}
		let messagecount = parseInt(params[0]);
		message.channel.fetchMessages({limit: messagecount})
		.then(messages => message.channel.bulkDelete(messages));
	}
	if (command === "kick") {
		let modRole = message.guild.roles.find("name", "ADMIN");
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
		kickMember.kick().then(member => {
			message.reply(`${member.user.username} was kicked.`).catch(console.error);
		}).catch(console.error)
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
}); // END message handler

function clean(text) {
	if (typeof(text) === "string")
		return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
}

bot.login(config.token);

