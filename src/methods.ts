enum PaymentStatus {
  Holden,
  Processed,
  Reversed,
}

class Payment {
  id: number;
  status: PaymentStatus = PaymentStatus.Holden;
  createdAt: Date = new Date();
  updatedAt: Date;

  constructor(id: number) {
    this.id = id;
  }

  getPaymentLifeTime(): number {
    return this.createdAt.getTime() - new Date().getTime();
  }

  unholdPayment(): void {
    if (this.status === PaymentStatus.Processed) {
      throw new Error("Payment is already processed");
    }

    this.status = PaymentStatus.Reversed;
    this.updatedAt = new Date();
  }
}

const payment = new Payment(1);
payment.unholdPayment();

const time = payment.getPaymentLifeTime();

console.log(time);
console.log(payment);
