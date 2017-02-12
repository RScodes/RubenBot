exports.run = (bot, message, args) => {
	if(message.author.id !== "226003765889597440") return;
	try {
		var code = args.join(" ");
		var evaled = eval(code);
		if (typeof evaled !== "string") {
			evaled = require("util").inspect(evaled);
		}		
		message.channel.sendCode("xl", clean(evaled));   
	} catch(err) {
	 	message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
	}
}

function clean(text) {
	if (typeof(text) === "string") {
		return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	} else{
		return text;
	}
}
