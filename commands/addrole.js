exports.run = (bot, message, args) => {
	let modRole = message.guild.roles.find("name", "MOD");
	if(!message.member.roles.has(modRole.id)) {
		return message.reply("pleb ur not admin").catch(console.error);
	}
	let args = message.content.split(' ');
	args.shift();
	args.shift();
	let role = message.guild.roles.find("name", args.join(" "));
	// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
	let member = message.guild.member(message.mentions.users.first());
	// or the person who made the command: let member = msg.member;
	// Add the role!
	member.addRole(role.id).catch(console.error);
	message.channel.sendMessage("role " + role + " has been added :thumbsup:")
}
