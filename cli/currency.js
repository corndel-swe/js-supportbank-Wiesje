import { Command } from "commander";
import 'dotenv/config'


const currencyController = new Command('currency')

currencyController
    .command('convert <amount> <from> <to>')
    .description('return equivalent amount in different currency')
    .action(async (amount, from, to) => {
        let conversionRate = 0

        if (from === 'usd' && to === 'gbp') {
            const domain = 'https://openexchangerates.org'
            const endpoint = '/api/latest.json'
            const url = new URL(endpoint, domain)
            url.searchParams.append('app_id', process.env.OPENEXCHANGERATES_API_KEY)

            const response = await fetch(url)
            const data = await response.json()

            conversionRate = data.rates.GBP
        }

        console.log(amount * conversionRate)
    })

export default currencyController
