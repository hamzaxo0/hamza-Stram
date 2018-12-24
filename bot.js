const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "H";
var adminprefix = 'H'

const developers = ["288368249194938368",""]
client.on('message', message => {
    var argresult = message.content.split().slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(white_check_mark   ${argresult})
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(white_check_mark   ${argresult})
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(white_check_mark   ${argresult})
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(white_check_mark)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(Changing The Name To ..${argresult} )
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(Changing The Avatar To :${argresult});
}
});

client.login(process.env.BOT_TOKEN);
