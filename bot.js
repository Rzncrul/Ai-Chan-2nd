const Discord = require('discord.js');
 const client = new Discord.Client();
 
 client.on('ready', () => {
     console.log('I am ready!');
 });
 
 client.on('message', message => {
     if (message.content === 'touch') {
     	message.reply('Kyaaaaa...!Captain is a pervert!Reporting to headquarters.');
   	}
     if (message.content === 'hug') {
     	message.reply('W-WHO SAID U CAN HUG ME?');
-  	}
+    if (message.isMentioned(client.user)) {
+    message.reply('Nani?');
    }
 });
 
 // THIS  MUST  BE  THIS  WAY
      client.login(process.env.BOT_TOKEN);
