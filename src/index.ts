import { CommandoClient } from 'discord.js-commando'
import path from 'path'
import { config } from 'dotenv'
import { MongoClient } from 'mongodb'
// @ts-ignore
import MongoDBProvider from 'commando-provider-mongo'

config()

const { TOKEN, OWNER_ID, PREFIX, DB_URL, DB_NAME } = process.env

const client = new CommandoClient({
    owner: OWNER_ID,
    commandPrefix: PREFIX
})

client.on('ready', async () => {
    if (client.user) {
        client.user.setPresence({
            status: 'online',
            activity: {
                name: 'video games',
                type: 'PLAYING'
            }
        })
    }
    
    client.setProvider(
        MongoClient.connect(DB_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(dbClient => new MongoDBProvider(dbClient, DB_NAME))
    )
    .catch(console.error);

    client.registry
    .registerGroups([
      ['misc', 'misc commands'],
      ['moderation', 'moderation commands'],
      ['games', 'Commands to handle games'],
    ])
    .registerCommandsIn({
    filter: /^([^.].*)\.(js|ts)$/,
    dirname: path.join(__dirname, 'commands'),
  })
})

client.login(TOKEN)