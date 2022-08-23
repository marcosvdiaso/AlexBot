const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "alex "; // bot prefix is alex
const keepAlive = require('./server');

client.on("message", function(message)
  { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    // command ping
    if (command === "ping") {  // checks if the message says "ping"
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! Essa mensagem tem uma latência de ${timeTaken}ms.`);                       
    } 

		    //command cringe
    if (command === "cringe") { // checks if the message says "cringe"
        const cringe = ["icaro é cringe!", "bolsonaro é cringe!", "naldo é cringe"]

				const cringeMessage = cringe[Math.floor(Math.random() * cringe.length)];

        message.reply(`${cringeMessage}`);                       
    } 

		//command penis
    if (command === "penis") { // checks if the message says "penis"
        const peniz = ["8D", "8=D", "8==D", "8===D", "8====D", "8=====D", "8======D", "8=======D", "8===========D", "(|)", "8==================D"]

				const randomPenis = peniz[Math.floor(Math.random() * peniz.length)];

				const penisEmbed = new Discord.MessageEmbed()
				.setColor('#7BD195')
				.setTitle('d20 big but penis')
				.setDescription(`${randomPenis}`)
 			   message.channel.send(penisEmbed);                     
    } 

    //command autor
    if (command === "autor") { // checks if the message says "autor"
        message.reply(`https://twitter.com/marcosvdiaso\nhttps://github.com/marcosvdiaso`);         
	     
}
			     

     //command sougay?
     if (command === "sougay?") { // checks if the message says "sougay?"
        const gaynumber = Math.floor(Math.random() * 100) + 1 + '%'
        const gayEmbed = new Discord.MessageEmbed()
	.setColor('#F13710')
	.setTitle('Deixa eu ver...')
	.setDescription(`Você é ${gaynumber} gay :gay_pride_flag:`)
    message.channel.send(gayEmbed);                     
    }

     //command souracist?
     if (command === "souracist?") { // checks if the message says "souracist?"
        const racnumber = Math.floor(Math.random() * 100) + 1 + '%'
        const racEmbed = new Discord.MessageEmbed()
	.setColor('#F55000')
	.setTitle('Estou analisando seu arrombado...')
	.setDescription(`Você é ${racnumber} racista!`)
    message.channel.send(racEmbed);                     
    }

     //command soumachist?
     if (command === "soumachist?") { // checks if the message says "soumachist?"
        const machnumber = Math.floor(Math.random() * 100) + 1 + '%'
        const machEmbed = new Discord.MessageEmbed()
	.setColor('#000000')
	.setTitle('Você é uma escória...')
	.setDescription(`Você é ${machnumber} machista!`)
    message.channel.send(machEmbed);                     
    }

		     //command waifu
     if (command === "waifu") { // checks if the message says "waifu"
        const waifunumber = Math.floor(Math.random() * 100) + 1
        const waifuEmbed = new Discord.MessageEmbed()
	.setColor('#F13710')
	.setTitle('wtf?')
	.setDescription(`Você é ${waifunumber}/100 waifu :purple_heart:`)
    message.channel.send(waifuEmbed);                     
    }
    
        //command fudendo
    if (command === "fudendo?") {
    	var images = ["https://i.imgur.com/XSADSvS.jpg", "https://i.imgur.com/QxqIBsp.jpg", "https://i.imgur.com/KhyNazU.jpg"];
    	var image = Math.floor(Math.random() * images.length);
    	const memeEmbed = new Discord.MessageEmbed()
    	.setColor('#FFC0CB')
    	.setImage(String([images[image]]))
    	message.channel.send(memeEmbed);
  }

    //command ajuda
    if (command === "ajuda") { // checks if the message says "ajuda"
        const helpEmbed = new Discord.MessageEmbed()
	.setColor('#F11111')
	.setTitle('Comandos')
	.setDescription(`ajuda, ping, autor, sougay?, server, myinfo, avatar, responda(esse comando tá incompleto, que mitada), penis, waifu, souracist?, soumachist?, cringe, fudendo?`)
    message.channel.send(helpEmbed);
    }

    //command server
    if (command === "server") {
        const serverEmbed = new Discord.MessageEmbed()
        .setColor('#F12432')
        .setTitle('Informações do Servidor')
        .setDescription(`Nome do Server: ${message.guild.name}\nNúmero de membros: ${message.guild.memberCount}\nCriado em: ${message.guild.createdAt}`)
        message.channel.send(serverEmbed);
    }

    //command myinfo
    if (command === "myinfo") {
        const userEmbed = new Discord.MessageEmbed()
        .setColor('#1CAF71')
        .setTitle('Informações do Usuário')
        .setDescription(`Seu nome de usuário: ${message.author.username}\nSeu ID: ${message.author.id}`)
        message.channel.send(userEmbed);
    }

    //command avatar
    if (command === "avatar") {
    
        
        if(message.mentions.users.size){
            let member=message.mentions.users.first()
        if(member){
            const emb=new Discord.MessageEmbed()
            .setColor('#5F218A')
            .setImage(member.displayAvatarURL())
            .setTitle(member.username)
            message.channel.send(emb)
            
        }
        else{
            message.channel.send("Sorry none found with that name")

        }
        }else{
            const emb=new Discord.MessageEmbed()
            .setColor('#5F218A')
            .setImage(message.author.displayAvatarURL())
            .setTitle(message.author.username)
            message.channel.send(emb)
        }
}

    //command responda
    if (command === "responda") { // checks if the message says "responda"
        const messages = ["é verdade!", "é mentira!", "não tenho certeza...", "me recuso a responder, seu babaca!", "kkkkkkkkk que porra é essa", "pergunta pra tony", "uau, dessa eu não sabia", "pesquisa no google", "google.com", "?"]

				const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        message.reply(`${randomMessage}`);                       
    } 

}); 

keepAlive();
client.login(config.BOT_TOKEN);