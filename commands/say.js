exports.run = (bot, message, args) => {
  message.channel.sendMessage(args.join(" ")).catch(console.error);
}
