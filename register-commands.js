require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
  {
    name: 'add',
    description: 'Adds two numbers.',
    options: [
      {
        name: 'first-number',
        description: 'The First Number',
        type: ApplicationCommandOptionType.Number,
        choices: [
          {
            name: '1',
            value: 1,
          },
          {
            name: '2',
            value: 2,
          },
          {
            name: '3',
            value: 3,
          },
        ],
        required: true,
      },
      {
        name: 'second-number',
        description: 'The Second Number',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ]
  },
  {
    name: 'embed',
    description: 'Sends an embeded message.',
  }      
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
      console.log('Registering slash commands...');  
      await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
        {body: commands}
      )  

      console.log('Slash commands were successfully loaded')
    } catch (error) {
      console.log(`There was an error: ${error}`);  
    }
})();