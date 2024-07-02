import { Command } from 'commander'
import fs from 'fs/promises'
import { Transactions } from '../models/Transactions.js'
import { Bank } from '../models/Bank.js'

const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    Transactions.makeLog(from, to, amount)
  })

transactionController
  .command('summarise all')
  .description('outputs the names of each person, and the total amount of money they should receive from the bank')
  .action(async () => {
    // read CSV
    // split into array
    const path = new URL('../data/Transactions2014.csv', import.meta.url)
    let content = await fs.readFile(path, 'utf-8')
    let arr = content.split('\n').slice(1)
    console.log(arr)

    // let bank = new Bank()
    // bank.processTransaction()
  })

// 1. Add a command to TransactionController "summarise all"

// 2. Actually do the thing

// Read all the lines from the csv file

// Put the data from the files into some objects
// Account object { Jon A, 0.95}

// Parse the objects to print names and amounts to console
// Iterate over the list of people, get name and amount
// Print to console (persons, amounts)

export default transactionController
