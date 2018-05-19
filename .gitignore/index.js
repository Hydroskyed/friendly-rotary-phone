const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("FloBot,Onmedev");
    console.log("Flo bot a bien été connecté");
    
});

bot.login(process.env."NDQ3NDA0NTE0MjMzMDI0NTEy.DeHKxA.JR-MWsSCQXci9sYBaDijLLu8_-A");
