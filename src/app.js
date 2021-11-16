const dotenvOutput = require("dotenv").config();
const Eris = require("eris");
const { CommandClient } = Eris;

const botClient = require("../data/bot/client.json");
const botInfo = require("../data/bot/info.json");
const { availableHooks } = require("../data/hooks");
const { availableCommands } = require("../data/commands");

const bot = new CommandClient(process.env.DISCORD_TOKEN, botClient, botInfo);

for(const event in availableHooks) {
    const hook = availableHooks[event];

    if(Array.isArray(hook)) {
        hook.forEach(_hook => {
            bot.on(event, _hook);
        });
        return;
    }
    bot.on(event, hook);
}

for(const command of availableCommands) {
    const { label, generator, options } = command;

    bot.registerCommand(label, (msg, args) => {
        return generator(msg, args, bot);
    }, options);
}

bot.connect();
