const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {	
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Yeterli yetki bulunmamakta.').then(m => m.delete(2000))
if (!args[0]) return message.channel.send(`Bir seçenek belirtiniz. Örnek kullanım: ${ayarlar.prefix}sunucu-adı-sayaç **aç** veya **kapat**`).then(m => m.delete(2000))
if (args[0] === "aç") {
	db.set(`starkcode_${message.guild.id}`, 'acik')
	message.channel.send('**sunucu-ismi-sayaç** adlı özellik, aktif edildi.').then(m => m.delete(2000))
}
if (args[0] === "kapat") {
	db.delete(`starkcode_${message.guild.id}`)
	message.channel.send('**sunucu-ismi-sayaç** adlı özellik, deaktif edildi.').then(m => m.delete(2000))
	}	
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-adi-sayac'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-ismi-sayaç',
  description: '',
  usage: 'sunucu-ismi-sayaç'
}