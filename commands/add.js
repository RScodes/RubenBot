exports.run = (bot, message, args) => {
	let numArray = args.map(n=> parseInt(n));
	let total = numArray.reduce( (p, c) => p+c);
		
	message.channel.sendMessage(total).catch(console.error);
}
