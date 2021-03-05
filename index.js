const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "alex "; // bot prefix is +
const keepAlive = require('./server');

client.on("message", function(message) { 
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
    
    //command random number
    if (command === "random") { // checks if the message says "random"
        const number = Math.random(); // generates a random number
        message.reply(`wtf? ${number}.`);                       
    } 

    //command author
    if (command === "author") { // checks if the message says "author"
        message.reply(`https://twitter.com/mechzzzz`);                       
    }

     //command i'm gay
     if (command === "imgay") { // checks if the message says "imgay"
        const gaynumber = Math.floor(Math.random() * 100) + 1 + '%'
        const gayEmbed = new Discord.MessageEmbed()
	.setColor('#F13710')
	.setTitle('gay?')
	.setDescription(`Você é ${gaynumber} gay :gay_pride_flag:`)
    message.channel.send(gayEmbed);                     
    }

    //command help
    if (command === "help") { // checks if the message says "help"
        const helpEmbed = new Discord.MessageEmbed()
	.setColor('#F11111')
	.setTitle('Comandos')
	.setDescription(`help, ping, random, author, imgay, server, myinfo, avatar`)
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

}); 

keepAlive();
client.login(config.BOT_TOKEN);