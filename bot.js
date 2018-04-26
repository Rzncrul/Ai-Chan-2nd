const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    msg = message.content.toLowerCase();
    if (msg.startswith("touch")) {
    	message.reply("Kyaaa!");
  	}
    if (message.content === 'hug') {
    	message.reply('W-WHO SAID YOU CAN TOUCH ME?');
  	}
      if (message.isMentioned(client.user)) {
    message.reply('Nani?');
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
