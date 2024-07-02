import { Account } from "./Account.js"

export class Bank {

    constructor() {
        this.accounts = []
    }

    processTransaction(from, to, amount) {
        if (this.accounts.filter(account => account.name === from) === 0) {
            this.addAccount(from, 0)
        }
        if (this.accounts.filter(account => account.name === to) === 0) {
            this.addAccount(to, 0)
        }
        this.addAmount(to, amount)
        this.deductAmount(from, amount)
    }

    addAccount(name, amount) {
        this.accounts.push(new Account(name, amount))
    }

    addAmount(name, amount) {
        let account = this.accounts.find(account => account.name === name)
        account.amount += amount
    }

    deductAmount(name, amount) {
        let account = this.accounts.find(account => account.name === name)
        account.amount += amount
    }

}