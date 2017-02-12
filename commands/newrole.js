exports.run = (bot, message, args) => {
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
