module.exports = {
	name: "unlock",
	description: "Lets user from sending messages.",
	execute(message, args) {
        const channel = message.mentions.channels.first();
        channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: true });
        
	},
};