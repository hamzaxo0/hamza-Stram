const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

 const devs = ['288368249194938368' , '288368249194938368' , '288368249194938368'];
const adminprefix = "H";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**  ${argresult} ply .. ✅**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**  ${argresult} wt .. ✅**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**  ${argresult} ls .. ✅**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/muuuuuute");
      message.channel.sendMessage(`**  ${argresult} st .. ✅**`)
    }
  if (message.content.startsWith(adminprefix + 'us')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**us ..**${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'av')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**avatar ... :** `);
  }
  });



client.on('guildMemberAdd', member => {
     var guild;
    while (!guild)
        guild = client.guilds.get("524922736481665024") 
let channel = member.guild.channels.find('name', 'all');
  if (!channel) return; 
client.channels.get("524931094831955968").send(`**Ꮃelcome Ꭲo Ꮪerver Soul ..**`) 
});






client.login(process.env.BOT_TOKEN);
