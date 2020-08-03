const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

	if (command === 'ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    else if (command === 'server') {
        message.channel.send(`Hello, this message is in the channel ${message.channel.name}.
 The server ${message.guild.name} is in the region ${message.guild.region}`)
    }
    
});


client.login(token);
