import { Command } from 'commander'
import { Transactions } from '../models/Transactions.js'

const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    Transactions.makeLog(from, to, amount)
  })

export default transactionController
