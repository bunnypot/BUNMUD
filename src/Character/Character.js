var Character = {
    "name": "",
    "owner_id": "",
    "stats": {
        "Strength": 0,
        "Reaction": 0,
        "Tenacity": 0,
        "Charisma": 0
    }
}

var help = {
    "componentname": "Character", 
    "description": "Character Generator",
    "commands": {
        ".c new": {
            "title": " New Character",
            "keyword":".c new <character name>",
            "function":"Starts the character generator process, the character will bind to your user account."
        }
    }
}

global.discord_client.on('message', msg => {
    //listen to dicerolls 
    if(message.content.substr(0,2).toLowerCase() == ".c new") {
        var name  = message.content.match(message.content.substr(2));
        message.reply("```INFO:: Starting character process for "+name+"...```");
    }
});