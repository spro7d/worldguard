const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:deaktif: Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join(' ')
  
      if (!mesaj) {
        return message.channel.send(`Özel görüşürüz mesajını yazmalısın. \`${prefix}özelgörüşürüz -sunucu- sunucusundan ayrıldığına üzüldük -kullanıcı- !\``)
    }
  
    db.set(`ozelgorusuruz_${message.guild.id}`, mesaj)
    message.channel.send(` Özel görüşürüz mesajı \`${mesaj}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
}

exports.help = {
    name: 'özel-görüşürüz-ayarla',
    description: 'Sunucudan ayrılan kişiye özelden gönderilecek mesajı ayarlar. (Kullanıcı isminin geleceği yere "-kullanıcı-", sunucu isminin geleceği yere "-sunucu-" yazınız.)',
    usage: 'özelgörüşürüz <yazı>'
}