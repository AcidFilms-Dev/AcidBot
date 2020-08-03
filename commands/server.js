module.exports = {
	name: 'server',
	description: 'Replies with server info',
	execute(message, args) {
		message.channel.send(`Hello, this message is in the channel ${message.channel.name}.
 The server ${message.guild.name} is in the region ${message.guild.region}`)
	},
};