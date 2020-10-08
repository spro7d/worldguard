const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');



exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#FF0000')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription("**!yardım-2** | 2. Yardım Menüsü! \n !oylama-kanal #kanal | Belirtilen Kanalda Oylama Sistemini Açar \n !oylama [Oylama Konusu] | Oylama Kanalı Belirtilen Kanalda Oylama Yapar! \n !reklam-taraması | Sunucudaki Üyelerin Customlarında Reklam Taraması Yapar! \n !reklam-engel aç | Reklam Engelleme Sistemini Aktif Eder! \n !reklam-engel kapat | Reklam Engelleme Sistemini Kapatır! \n !rol-ver @kullanıcı @rol | Belirtilen Kullanıcıya Belirtilen Rol Verilir! \n !sayaç #kanal [Sayaç Hedef] | Sayaç Kanalını Ve Sayaç Hedefini Belirler! \n !sayaç sıfırla | Sayaç Sistemini Kapatır! \n !seviye-yardım | Seviye Komutlarını Gösterir! \n !sunucu-panel | Sunucu Panelini Kurar!  ")
        .setThumbnail(client.user.avatarURL)
        .addField("» Linkler`, `[Bot Davet Linki](BOT DAVET LİNKİ!) **|** [Destek Sunucusu](DESTEK SUNUCUSU) ")
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("https://cdn.discordapp.com/attachments/752611498987094046/763699299011788800/wgkomutekran.png")  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım-2',
  description: '',
  usage: ''
};