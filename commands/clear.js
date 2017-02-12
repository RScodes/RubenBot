exports.run = (bot, message, args) => {
  let delamount = parseInt(args[1]) ? parseInt(args[1]) : 1;
			msg.channel.fetchMessages({limit: 100})
			.then(messages => {
				msgar = messages.array();
				msgar = msgar.filter(msg => msg.author.id === bot.user.id);
				msgar.length = delamount + 1;
				msgar.map(msg => msg.delete().catch(console.error));
		});
}
