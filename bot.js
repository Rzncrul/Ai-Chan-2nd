const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    prefix = "-";
    msg = message.content.toLowerCase();
    if (msg.startsWith(prefix + "touch")) {
    	message.reply("Kyaaa!");
  	}
    if (msg.startsWith(prefix + "hug")) {
    	message.reply("W-WHO SAID YOU CAN TOUCH ME?");
  	}
    if (msg.startsWith(prefix + "help")) {
    	message.channel.send("Fanmade AI Chan at your service: (Here is the list of commands) \n -touch \n -hug");
  	}
    if (msg.startsWith(prefix + "insult")) {
    	message.channel.send("Jedvin Sama is gay kaichou!");
  	}
    if (msg.startsWith(prefix + "goodnight")) {
    	message.reply("Oyasumi Kaichou ^^");
  	}
      if (message.isMentioned(client.user)) {
    message.reply('Nani?');
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
