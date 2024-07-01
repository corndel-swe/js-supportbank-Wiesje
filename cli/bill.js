import { Command } from "commander";

const billController = new Command("bill")

billController
    .command("split <amount> <persons>")
    .description("Split bill between number of people")
    .action((amount, persons) => {
        console.log(`Each person owes £${amount / persons}`)
    })

export default billController