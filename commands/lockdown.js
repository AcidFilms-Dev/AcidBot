module.exports = {
	name: "lockdown",
	description: "Stops user from sending messages.",
	execute(message, args) {
        const channel = message.mentions.channels.first();
        channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false });
        
	},
};