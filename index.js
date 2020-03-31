const Discord = require("discord.js")
const  { prefix, token }  = require('./config.json')
const client = new Discord.Client()

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(`${prefix}test`)) {
                message.channel.send('we love O10.');
    }
    if (message.content.startsWith('?kodnam')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          
          for (i = 0 ; i < 3 ; i++){

            member.voice.setChannel('694411779291217962')
            member.voice.setChannel('574248112038608927')
          }

          member.voice.setChannel('694411779291217962')
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
}
  });
  
client.login(token);

