const Discord = require('discord.js');
module.exports = member => {
    const channel = member.guild.channels.find('name', 'giriş-çıkış');
    if (!channel) return;
   const embed = new Discord.RichEmbed()
   .setColor('#00CC00')
   .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
   .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
   .setTitle('Üye katıldı;')
   .setDescription(`Sunucuya katıldı [${member.guild.memberCount} üye]!`)
   .setFooter('')
   .setTimestamp()
   channel.send(embed);
};
