const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu kullanmanız için `Yönetici` yetkisine sahip olmalısınız.') 


  let d = await db.fetch(`okanal_${message.guild.id}`)
  const sea = message.guild.channels.get(d)
  if (!sea) return message.channel.send('Oylama kanalı ayarlanmamış. Ayarlamak için `sh!oylama-kanal #kanal`')

    let yazi = args.slice(0).join(' ')
    if (!yazi) return message.channel.send('Lütfen Oylamada Ne Olacağını Yaz!')
    message.channel.send(`Oylama gönderildi. Gönderilen kanal: <#${d}>`)
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField('**Oylama Var!**', `**${yazi}**`)
    .setThumbnail(``)
    .setFooter(`'${message.author.username} oylama yaptı.'`)
    .setAuthor(`**${client.user.username} Oylama**`)
    sea.send('||@everyone|| ||@here||',{embed: embed}).then(m => { 
   let re = m.react('✅');
   let ra = m.react('❌');
        
    })
    }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['oylama-yap', 'oylamayap', 'oylamalar'],
 permLevel: 2,
 kategori: "yetkili"
};

exports.help = {
 name: 'oylama',
 description: 'Bulunduğunuz kanala oylama yapar.',
 usage: 'oylama'
};