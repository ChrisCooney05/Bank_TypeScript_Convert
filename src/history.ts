import Transaction from "./transaction";

export default class History {
  #transactions: Transaction[];
  #STATEMENT_HEADER: string;
  constructor() {
    this.#transactions = [];
    this.#STATEMENT_HEADER = "date || credit || debit || balance";
  }

  deposit(date: string, funds: number, balance: number): void {
    let fundsFloat = this.#formatInteger(funds);
    let balanceFloat = this.#formatInteger(balance);
    this.#makeTransactionInstance(date, fundsFloat, "", balanceFloat);
  }

  withdraw(date: string, funds: number, balance: number): void {
    let fundsFloat = this.#formatInteger(funds);
    let balanceFloat = this.#formatInteger(balance);
    this.#makeTransactionInstance(date, "", fundsFloat, balanceFloat);
  }

  #formatInteger(integer: number): string {
    return integer.toFixed(2);
  }

  #makeTransactionInstance(
    date: string,
    credit: string,
    debit: string,
    balance: string
  ): void {
    let singleTransaction = new Transaction(date, credit, debit, balance);
    this.#transactions.push(singleTransaction);
  }

  #pushStatementToArray(): string[] {
    let fullHistory = this.#transactions.reverse();
    return fullHistory.map(t => {
      let transaction = t.toString();
      return `\n${transaction}`;
    });
  }

  logStatement(): void {
    let result = this.#pushStatementToArray();
    let formattedResult = result.join("");
    console.log(`${this.#STATEMENT_HEADER}${formattedResult}`);
  }
}
