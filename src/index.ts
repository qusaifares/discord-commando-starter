import {CommandoClient} from 'discord.js-commando'
import {config} from 'dotenv'

const { TOKEN, OWNER_ID, PREFIX} = process.env

const client = new CommandoClient({
    owner: OWNER_ID,
    commandPrefix: PREFIX
})

client.login(TOKEN)