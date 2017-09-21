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
    if(msg.content.substr(0,6).toLowerCase() == ".c new") {
        var name  = msg.content.match(msg.content.substr(2));
        msg.reply("```INFO:: Starting character process for "+name+"...```");
    }
});