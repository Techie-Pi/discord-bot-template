# Discord Bot Template
A simple Discord Bot template with prebuilt command and hook system for easier development and maintenance

## Setup

1. Create a repo using this template/clone this repo
2. Run ``npm install`` or ``npm ci``
3. Create a ``.env`` file with a ``DISCORD_TOKEN``<sup>[[1]](#discord-bot-creation)</sup> field
4. Modify the code as you wish
5. Run ``npm start``

## Deployment

This template is completely unopinionated in everything related to deployment.

The simpler (yet expensive) way to deploy this bot is using services like Heroku, other alternative is to use a VPS from
providers like OVH or Google Cloud.

In order to have a deployment interface and management service, you could use something like
[PM2](https://pm2.keymetrics.io/).

In any case, the command to start the bot is ``npm start``, it is recommended to add a ``NODE_ENV`` field on ``.env``
with the value of ``PRODUCTION``.

## Adding functionality
### Directory structure
There are 3 key folders, almost everything you are going to do is inside these folders:
- ``bot`` - Contains client options (``client.json``) and command client options (``info.json``). These files are
  used in the constructor of ``Eris.CommandClient`` like the following:
  ``Eris.CommandClient(DISCORD_TOKEN, client.json, info.json)``
  
- ``commands`` - Contains the source code to all the commands, the command prefixes cam be customized on the
  ``info.json`` file.
  
- ``hooks`` - Contains the source code of the hooks. The hooks exported from the ``index.js`` have a key (the hook
  event string), and a function/array of functions that are executed when this event is triggered. These files are used
  in the ``Eris.CommandClient.on`` function like the following: ``Eris.CommandClient.on(key, value)``, this is wrapped
  on a ``for...of`` statement if the value is an array.
  
### Adding new commands

1. Create a new JavaScript file on ``data/commands`` folder
2. Create a generator function (check [example.js](data/commands/example.js))
3. Export a JSON object with: label, options and generator keys (check [example.js](data/commands/example.js))
4. Import the object on [index.js](data/commands/index.js) and add it to the ``availableCommands`` array

### Adding new hooks

1. Create a new JavaScript file on ``data/hooks`` folder
2. Create a function that will handle the hook and export it
3. Import the function on [index.js](data/hooks/index.js) and add it to the ``availableHooks`` object, using as the key
   the desired event name
   
# Discord bot creation
If you do not have, yet a bot created, you can check out the 
[Discord documentation](https://discord.com/developers/docs/intro#bots-and-apps) (or search online for a guide)
