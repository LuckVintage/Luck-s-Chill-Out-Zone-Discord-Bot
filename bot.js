const Discord = require("discord.js");
const inlinereply = require('discord-reply');
const client = new Discord.Client();
const {
    MessageEmbed
} = require('discord.js');

client.on("ready", () => {
    client.user.setActivity("the server", {
        type: "WATCHING",
    });
    console.log(`Logged in as ${client.user.tag}`)
});


client.on("guildMemberAdd", async member => {
	const moment = require('moment');
    const Embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle("You were automatically removed from Luck's Chill-Out Zone:")
        .setDescription("Sorry, our server is currently private. Try joining another time.")
		.setTimestamp()	
        .setFooter('Reason: Automated action: Secure mode active', 'https://luckunstoppable7.com/media/logo.png');
    member.send(Embed);
		channel = client.channels.cache.get('')
    const Embed2 = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle("Member Automatically Banned:")
		.addField('User', member, true)
		.addField('ID', `\`${member.id}\``, true)
		.addField('Joined Discord on', `\`${moment(member.user.createdAt).format('MMM DD YYYY')}\``, true)
        .setDescription("Reason: Automated action: Secure mode active")
		.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    channel.send(Embed2);
    setTimeout(function() {
        member.ban({
            reason: 'Automated action: Secure mode active'
        })
        setTimeout(function() {
            member.guild.members.unban(member.id)
        }, 86400000)
    }, 350);
	
})

client.on("message", (message) => {
	
	if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
    const Embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle("Luck's Chill-Out Zone Bot Help:")
        .setDescription("`lu.help` - Shows this help message. You can also tag the bot.")
		.setThumbnail('https://luckunstoppable7.com/media/logo.png')
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    message.lineReply(Embed);
    };
	
    if (message.content === "pls rob") {
    const Embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle(":x: This command is disabled!")
        .setDescription("Sorry, robbing is not allowed in Luck's Chill-Out Zone.")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    message.lineReply(Embed);
  }
  
    if (message.content === "pls bankrob") {
    const Embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle(":x: This command is disabled!")
        .setDescription("Sorry, robbing is not allowed in Luck's Chill-Out Zone.")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    message.lineReply(Embed);
  }
    if (message.content === "lu.help") {
    const Embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle("Luck's Chill-Out Zone Bot Help:")
        .setDescription("`lu.help` - Shows this help message. You can also tag the bot.")
		.setThumbnail('https://luckunstoppable7.com/media/logo.png')
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    message.lineReply(Embed);
    }
});


client.login("")
