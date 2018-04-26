const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var str = message.content;
    var str1 = str.toLowerCase();
    if (str1 == 'touch') {
    	message.reply('Kyaaaaa...!Captain is a pervert!Reporting to headquarters.');
  	}
    if (str1 == 'hug') || (message.content === 'Hug') {
    	message.reply('W-WHO SAID U CAN HUG ME?');
    }
    if (message.isMentioned(client.user)) {
    message.reply('Nani?');
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
