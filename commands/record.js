const fs = require('fs');
async function record(message, args){
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const audio = connection.receiver.createStream(message.member.id, { mode: 'pcm' });

        audio.pipe(fs.createWriteStream('user_audio'));

    }
}
module.exports = {
	name: 'record',
	description: 'Record the voice channel you are in',
	execute(message, args) {
		record(message, args)
	},
};