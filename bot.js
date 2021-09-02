const Discord = require("discord.js");
const inlinereply = require('discord-reply');
const client = new Discord.Client();
const config = require("./config.json");
const {
    MessageEmbed
} = require('discord.js');

client.on("ready", () => {
    client.user.setActivity("the server", {
        type: "WATCHING",
    });
    console.log(`Logged in as ${client.user.tag}`)
});

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

client.on("guildMemberAdd", async member => {
	if (member.guild.id != "819676728661377064") return;
	const accAge = Math.abs(Date.now() - member.user.createdAt);
	const accDays = Math.ceil(accAge / (1000 * 60 * 60 * 24));
		if (accDays <= 30) {
		 const Embed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle("You were automatically removed from Luck's Chill-Out Zone:")
			.setDescription("Sorry, your account must be 30 days or older to join this server.")
			.setTimestamp()	
			.setFooter('Reason: Automated action (Account age too young)', 'https://luckunstoppable7.com/media/logo.png');
    member.send(Embed);
	channel = client.channels.cache.get('865144587442061342')
	const moment = require('moment');
    const Embed2 = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle("Member Automatically Kicked:")
		.addField('**User:**', member, true)
		.addField('**ID:**', `\`${member.id}\``, true)
		.addField("**Joined Discord:**", `${moment(member.user.createdAt).format('dddd, Do MMMM YYYY, h:mm:ss a')}`)
        .setDescription("Reason: Automated action (Account age too young)")
		.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    channel.send(Embed2);
	setTimeout(function() {
		member.kick();
	}, 350)
	} else   {
		
	fs = require('fs');	
	fs.readFile('lockdown', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading lockdown file!');
		console.log(err)
    }

    if (data == "on") {
	const moment = require('moment');
    const Embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle("You were automatically removed from Luck's Chill-Out Zone:")
        .setDescription("Sorry, our server is currently private. Try joining another time.")
        .setTimestamp()    
        .setFooter('Reason: Automated action (Secure mode active)', 'https://luckunstoppable7.com/media/logo.png');
    member.send(Embed);
        channel = client.channels.cache.get('865144587442061342')
    const Embed2 = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle("Member Automatically Banned:")
        .addField('**User:**', member, true)
        .addField('**ID:**', `\`${member.id}\``, true)
        .addField("**Joined Discord:**", `${moment(member.user.createdAt).format('dddd, Do MMMM YYYY, h:mm:ss a')}`)
        .setDescription("Reason: Automated action (Secure mode active)")
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    channel.send(Embed2);
    setTimeout(function() {
        member.ban({
            reason: 'Automated action (Secure mode active)'
        })
        setTimeout(function() {
            member.guild.members.unban(member.id)
        }, 86400000)
    }, 350);
    
    } else   {
        return;
    }
})
}
})

client.on("message", (message) => {
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if (message.mentions.has(client.user.id)) {
	
    const Embed = new MessageEmbed()
        .setColor('#00FF00')
        .setTitle("Luck's Chill-Out Zone Bot Help:")
		.setDescription("Hello  " + `${message.author.username}` + "! Below is the list of commands currently available. ")
        .addField("`lu.help`", `Shows this help message. You can also tag the bot.`)
		.addField("`lu.serverinfo`", `Displays some useful information about the server you're in.`)
		.addField("`lu.memberinfo`", `Displays some useful information about your Discord account.`)
		.addField("`lu.ping`", `Displays the bot and Discord API latency.`)
		.addField("`lu.avatar`", `Displays your avatar. Tag another user to display their avatar instead.`)
		.addField("`lu.lock`", `Locks the channel the command was sent in. Requires the manage messages permission.`)
		.addField("`lu.unlock`", `Unlocks the channel the command was sent in. Requires the manage messages permission.`)
		.addField("`lu.purge`", `Deletes the specified amount of messages. Requires the manage messages permission.`)
		.addField("`lu.lockdown-enable`", `Starts a server lockdown. Requires the administrator permission.`)
		.addField("`lu.lockdown-disable`", `Ends the server lockdown. Requires the administrator permission.`)
		.setThumbnail('https://luckunstoppable7.com/media/logo.png')
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    message.lineReply(Embed);
    };
	
    if (message.content === "pls rob") {
    const Embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle(":x: This command is disabled!")
		.setDescription("Sorry  " + `${message.author.username}` + "! Robbing is not allowed in Luck's Chill-Out Zone. ")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    message.lineReply(Embed);
    }
  
    if (message.content === "pls bankrob") {
    const Embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle(":x: This command is disabled!")
		.setDescription("Sorry  " + `${message.author.username}` + "! Robbing is not allowed in Luck's Chill-Out Zone. ")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    message.lineReply(Embed);
    }
	
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    if (message.content.startsWith(config.prefix + "help")) {
    const Embed = new MessageEmbed()
        .setColor('#00FF00')
        .setTitle("Luck's Chill-Out Zone Bot Help:")
		.setDescription("Hello  " + `${message.author.username}` + "! Below is the list of commands currently available. ")
        .addField("`lu.help`", `Shows this help message. You can also tag the bot.`)
		.addField("`lu.serverinfo`", `Displays some useful information about the server you're in.`)
		.addField("`lu.memberinfo`", `Displays some useful information about your Discord account.`)
		.addField("`lu.ping`", `Displays the bot and Discord API latency.`)
		.addField("`lu.avatar`", `Displays your avatar. Tag another user to display their avatar instead.`)
		.addField("`lu.lock`", `Locks the channel the command was sent in. Requires the manage messages permission.`)
		.addField("`lu.unlock`", `Unlocks the channel the command was sent in. Requires the manage messages permission.`)
		.addField("`lu.purge`", `Deletes the specified amount of messages. Requires the manage messages permission.`)
		.addField("`lu.lockdown-enable`", `Starts a server lockdown. Requires the administrator permission.`)
		.addField("`lu.lockdown-disable`", `Ends the server lockdown. Requires the administrator permission.`)
		.setThumbnail('https://luckunstoppable7.com/media/logo.png')
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    message.lineReply(Embed);
    }
	
    if(command === 'serverinfo') {
	const ServerLogo = message.guild.iconURL();
	const moment = require('moment');
    const Embed = new MessageEmbed()
		.setColor('#00FF00')
		.setTitle(`Information About **${message.guild}:**`)
		.setThumbnail(ServerLogo)
		.addField("**Owner:**", `${message.guild.owner.user.tag}`, true)
        .addField("**Date Created:**", `**${moment(message.guild.createdAt).format('dddd, Do MMMM YYYY, h:mm:ss a')}**`)
        .addField("**Members**", "` " + `${message.guild.members.cache.size}` + " `")
        .addField("**Emoji's**", "` " + `${message.guild.emojis.cache.size}` + " `")
        .addField("**Roles:**", "` " + `${message.guild.roles.cache.size}` + " `")
        .addField("**Channels:**", "` " + `${message.guild.channels.cache.size}` + " `",)
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    message.lineReply(Embed)
    }
	
    if(command === 'memberinfo') {
	const moment = require('moment');
	const { guild, channel } = message
	const user = message.mentions.users.first() || message.member.user
	const member = guild.members.cache.get(user.id)
	const MemberAvatar = user.avatarURL();
	const roles = message.guild.roles.cache
	const rolelist = member.roles.cache
    .sort((a, b) => b.position - a.position)
    .map(r => r)
    .join(",");
    if (rolelist.length > 1024) rolemap = "To many roles to display";
    if (!rolelist) rolemap = "No roles";
    const Embed = new MessageEmbed()
		.setColor('#00FF00')
		.setTitle(`Information About **${user.username}:**`)
		.setThumbnail(MemberAvatar)
		.addField("**Username:**", `${user.tag}`, true)
		.addField("**Nickname:**", " " + `${member.nickname || 'None'}` + " ", true)
		.addField("**Is bot?**", " " + `${user.bot}` + " ", true)
		.addField("**Joined Discord:**", `${moment(user.createdAt).format('dddd, Do MMMM YYYY, h:mm:ss a')}`)
		.addField("**Joined Server:**", `${moment(member.joinedAt).format('dddd, Do MMMM YYYY, h:mm:ss a')}`)
        .addField("Roles: (" + `${member.roles.cache.size}` + ")" + "" , rolelist)
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    message.lineReply(Embed)
    }
	
    if(command === 'ping') {
	message.channel.send('Please wait while we calculate the ping...').then((pingMessage) => {
	const ping = pingMessage.createdTimestamp - message.createdTimestamp
	pingMessage.delete()
    const Embed = new MessageEmbed()
		.setColor('#00FF00')
		.addField("**Bot Latency:**", "` " + `${ping}` + " ms`", true)
		.addField("**Discord API Latency:**", "` " + `${client.ws.ping}` + " ms`", true)
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
    message.lineReply(Embed)
    })
  }
  
  	if (command === 'avatar') {	
	if (args[0]) {
	const tagcheck = getUserFromMention(args[0]);
	if (!tagcheck) {
	const Embed = new MessageEmbed()
		.setColor('#FF0000')
		.setTitle(":x: Invalid user!")
		.setDescription("Sorry  " + `${message.author.username}` + "! You did not mention a valid user. ")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
	return message.lineReply(Embed);	
	}
  }	
	const { guild, channel } = message
	const user = message.mentions.users.first() || message.member.user
	const member = guild.members.cache.get(user.id)
	const MemberAvatar = user.avatarURL();
	const Embed = new MessageEmbed()
		.setColor('#00FF00')
		.setTitle(`**${user.username}'s avatar:**`)
		.setImage(user.displayAvatarURL({ dynamic: true }))
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
	message.lineReply(Embed)
	
	}
	
	if(command === 'lock') {
	const Embed = new MessageEmbed()
		.setColor('#FF0000')
		.setTitle(":x: Permission Denied!")
		.setDescription("Sorry  " + `${message.author.username}` + "! You need the manage message permission to lock channels. ")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');	
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReply(Embed);
		let role = message.guild.roles.cache.get("819953871249473577");
    const Embed2 = new MessageEmbed()
		.setColor('#00FF00')
        .setTitle(":lock: Channel locked!")
        .setDescription(`This channel has been locked by ${message.author.tag}.`)
        .setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
        message.channel.updateOverwrite(role, {
            SEND_MESSAGES: false
        })
    message.lineReply(Embed2)
    }
	
	if(command === 'unlock') {
	const Embed = new MessageEmbed()
		.setColor('#FF0000')
		.setTitle(":x: Permission Denied!")
		.setDescription("Sorry  " + `${message.author.username}` + "! You need the manage message permission to unlock channels. ")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');	
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReply(Embed);
		let role = message.guild.roles.cache.get("819953871249473577");
    const Embed2 = new MessageEmbed()
		.setColor('#00FF00')
        .setTitle(":unlock: Channel unlocked!")
        .setDescription(`This channel has been unlocked by ${message.author.tag}.`)
        .setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
        message.channel.updateOverwrite(role, {
            SEND_MESSAGES: null
        })
    message.lineReply(Embed2)
	
    }
	
	if(command === 'purge') {
	const Embed = new MessageEmbed()
		.setColor('#FF0000')
		.setTitle(":x: Permission Denied!")
		.setDescription("Sorry  " + `${message.author.username}` + "! You need the manage message permission to delete messages. ")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');	
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReply(Embed);
        const amount = args[0]
	const Embed2 = new MessageEmbed()
		.setColor('#FF0000')
		.setTitle(":x: Error!")
		.setDescription("Sorry  " + `${message.author.username}` + "! You need to mention the amount of messages to delete. ")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
        if(!amount) return message.lineReply(Embed2);
        if(isNaN(amount)) return message.lineReply(Embed2);
	const Embed3 = new MessageEmbed()
		.setColor('#FF0000')
		.setTitle(":x: Error!")
		.setDescription("Sorry  " + `${message.author.username}` + "! The number of messages must be 99 or lower. ")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
        if(parseInt(amount) > 99) return message.lineReply(Embed3);
        message.channel.bulkDelete(parseInt(amount)+1)
	const Embed5 = new MessageEmbed()
		.setColor('#00FF00')
		.setTitle(":white_check_mark: Success!")
		.setDescription(`${message.author.username}, you have deleted ${amount} messages!`)
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
	message.reply(Embed5)
        .then(m => m.delete({timeout:5000}))
	}
	
	if(command === 'lockdown-enable') {
	const Embed = new MessageEmbed()
		.setColor('#FF0000')
		.setTitle(":x: Permission Denied!")
		.setDescription("Sorry  " + `${message.author.username}` + "! You need the administrator permission to start a server lockdown. ")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');	
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.lineReply(Embed);
	fs = require('fs');
	fs.writeFile('lockdown', 'on', function (err) {
	if (err) return console.log(err);
	console.log('Lockdown mode enabled');
	const Embed2 = new MessageEmbed()
		.setColor('#00FF00')
		.setTitle(":white_check_mark: Success!")
		.setDescription(`${message.author.username}, you enabled lockdown mode!`)
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
	message.reply(Embed2)
});

    }
	
	if(command === 'lockdown-disable') {
	const Embed = new MessageEmbed()
		.setColor('#FF0000')
		.setTitle(":x: Permission Denied!")
		.setDescription("Sorry  " + `${message.author.username}` + "! You need the administrator permission to end a server lockdown. ")
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');	
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.lineReply(Embed);
	fs = require('fs');
	fs.writeFile('lockdown', 'off', function (err) {
	if (err) return console.log(err);
	console.log('Lockdown mode disabled');
	const Embed2 = new MessageEmbed()
		.setColor('#00FF00')
		.setTitle(":white_check_mark: Success!")
		.setDescription(`${message.author.username}, you disabled lockdown mode!`)
		.setTimestamp()
		.setFooter('Luck\'s Chill-Out Zone', 'https://luckunstoppable7.com/media/logo.png');
	message.reply(Embed2)
});

    }
	
});

client.login(config.token);
