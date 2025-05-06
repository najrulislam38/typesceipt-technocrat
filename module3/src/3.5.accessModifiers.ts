{
  // access modifiers
  class BackAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number; //
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    getBalance() {
      return this._balance;
    }
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    withdraw(amount: number) {
      if (this._balance >= amount) {
        this._balance = this._balance - amount;
      }
    }
  }

  class StudentAccount extends BackAccount {
    test() {
      this._balance;
    }
  }

  const poorMansAccount = new BackAccount(112, "Mr. Poor Man", 200);

  // poorMansAccount._balance = 0;

  poorMansAccount.addDeposit(100);
  poorMansAccount.withdraw(300);

  const myBalance = poorMansAccount.getBalance();
  console.log(myBalance);

  //
}
