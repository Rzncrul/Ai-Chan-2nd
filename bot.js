const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '@Ai Chan 2nd touch') {
    	message.reply('Kyaaaaa...!Captain is a pervert!Reporting to headquarters.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
