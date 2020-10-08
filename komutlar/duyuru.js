const Discord = require("discord.js");
const fla = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Bu komutu kullanmak için `SUNUCUYU_YÖNET` yetkisine sahip olmalısınız!')

    let mesaj = args.join(" ");
if (!mesaj) return message.channel.send('Lütfen duyuru\'ya atılıcak yazıyı giriniz.')
  
  let kanalid = await fla.fetch(`duyuru-kanal_${message.guild.id}`)
  let kanal = client.channels.get(kanalid)

  const embed = new Discord.RichEmbed()
  .setTitle('Duyuru Sistemi - WorldGUARDBOT')
  .setDescription(mesaj)
  .setColor('RANDOM')
  kanal.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'duyuru',
  description: 'Duyuru sistemi',
  usage: 'duyuru'
};