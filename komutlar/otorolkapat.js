const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
  	let sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
    	let otorolkapat = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
		if(!sunucuyaözelayarlarOtorol[message.guild.id]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`Otorolü Ayarlamadığın İçin Sıfırlayamazsın!`)
				.setColor("RED")
				.setTimestamp('Ayarlamak İçin m!otorol @Rol #Kanal')
			message.channel.send({embed})
			return
		}
		delete sunucuyaözelayarlarOtorol[message.guild.id]
		fs.writeFile("./otorol.json", JSON.stringify(sunucuyaözelayarlarOtorol), (err) => {
			console.log(err)
		})
		const embed = new Discord.RichEmbed()
			.setDescription(`Otorol Başarıyla Kapandı !`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otorolsıfırla', 'kapat otorol'],
  permLevel: 0
};

exports.help = {
  name: 'kapatotorol',
  description: 'Slots oyunu oynar',
  usage: 'otorolkapat'
};