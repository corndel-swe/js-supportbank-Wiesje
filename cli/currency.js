import { Command } from "commander";

const currencyController = new Command('currency')

currencyController
    .command('convert <amount> <from> <to>')
    .description('return equivalent amount in different currency')
    .action((amount, from, to) => {
        let conversionRate = 0

        if (from === 'usd' && to === 'gbp') {
            conversionRate = 0.78
        }

        console.log(amount * conversionRate)
    })

export default currencyController
