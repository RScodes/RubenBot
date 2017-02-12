exports.run = (bot, message, args) => {
	let modRole = message.guild.roles.find("name", "ADMIN");
	let userToKick = message.mentions.users.first();
	if(!message.member.roles.has(modRole.id)) {
		return message.reply("pleb ur not admin").catch(console.error);
	}
	let role = message.guild.roles.find("name", args.join(" "));
	// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
	let member = message.guild.member(message.mentions.users.first());
	// or the person who made the command: let member = msg.member;
	// Add the role!
	member.addRole(role).catch(console.error);
}
