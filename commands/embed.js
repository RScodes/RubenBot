exports.run = (bot, message, args) => {
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
