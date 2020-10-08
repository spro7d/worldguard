const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.RichEmbed()
       .setTitle(`:no_entry_sign:  `)
       .setColor("RED");
       message.channel.send("Yasaklı Kullanıcı bulunamadı");
     }
     else
     {
       const embed = new Discord.RichEmbed()
       .setTitle("Yasaklı Kullanıcılar")
       .setColor("RED");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlılar","banliste"],
  permLevel: 0
};
module.exports.help = {
  name: 'yasaklar',
  description: 'Sunucundan yasaklı üyeleri gösterir.',
  usage: 'yasaklar'
};