exports.run = (bot, message, args) => {
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
