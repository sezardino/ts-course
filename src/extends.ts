type IPaymentStatus = "new" | "paid";

interface IPayment {
  id: number;
  status: IPaymentStatus;
  pay: () => void;
}

class ExtendsPayment implements IPayment {
  id: number;
  status: IPaymentStatus = "new";

  constructor(id: number) {
    this.id = id;
  }

  pay(): void {
    this.status = "paid";
  }
}

class PersistedPayment extends ExtendsPayment {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  save(): void {
    // save
  }

  override pay(date?: Date) {
    super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}
