// JSDoc for code completion
/**
 * Example Generator
 * @param msg{Message}
 * @param args{string[]}
 * @param bot{CommandClient}
 */
function generator(msg, args, bot) {
    return "Example!";
}

const command = {
    label: "example",
    options: {
        description: "Example command",
        fullDescription: "Example command -- to test the bot template"
    },
    generator
}

module.exports = command;
