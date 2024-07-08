import { program } from 'commander'
import transactionController from './transaction.js'
import billController from './bill.js'
import currencyController from './currency.js'

program.version('0.1.0').description('A CLI transaction helper')

program.addCommand(transactionController)
program.addCommand(billController)
program.addCommand(currencyController)

program.parse(process.argv)

