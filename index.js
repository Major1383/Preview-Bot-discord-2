const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
   
client.user.setPresence({  
    status: 'dnd',     //sets status button to green   
    activity: {  
     name: '   UpdatePreView!📊',    //This is the custom text  
     type: 'WATCHING'}
    });
 });
client.login('ODIwMzk3NDczMjUxNTkwMTQ0.YE0krw.yYznkRoHdWQR_XXsLODsQ7LLrtE');