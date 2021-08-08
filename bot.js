const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');

client.on("ready", () => {
  client.user.setActivity("the server", {
  type: "WATCHING", });
  console.log(`Logged in as ${client.user.tag}`)
});


client.on("guildMemberAdd", async member => {
	const exampleEmbed = new MessageEmbed()
	.setColor('#FF0000')
	.setTitle("You were automatically removed from Luck's Chill-Out Zone:")
	.setDescription("Sorry, our server is currently private. Try joining another time.")
	.setFooter('Reason: Automated action: Secure mode active', 'https://luckunstoppable7.com/media/logo.png');
	member.send(exampleEmbed);
	setTimeout(function(){
	member.ban({ reason: 'Automated action: Secure mode active' })
	}, 350);
})

client.login("")
