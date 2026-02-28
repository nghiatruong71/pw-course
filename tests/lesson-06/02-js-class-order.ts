// 1️⃣ Định nghĩa Item
type Item = {
  name: string;
  price: number;
  amount: number;
  discount: number; // % giảm giá
};

// 2️⃣ Class Order
class Order {
  orderID: number;
  customerName: string;
  items: Item[];
  totalAmount: number;

  constructor(orderID: number, customerName: string) {
    this.orderID = orderID;
    this.customerName = customerName;
    this.items = [];
    this.totalAmount = 0;
  }

  // 3️⃣ Thêm sản phẩm
  addItem(item: Item): void {
    this.items.push(item);
  }

  // 4️⃣ Tính tổng tiền
  calculateTotal(): number {
    let sum = 0;

    for (const item of this.items) {
      const lineTotal = item.price * item.amount;
      const afterDiscount = lineTotal * (1 - item.discount / 100);
      sum += afterDiscount;
    }

    this.totalAmount = sum;
    return sum;
  }
}

// ====== Test ======
const order1 = new Order(1, "Nghia");

order1.addItem({
  name: "Laptop",
  price: 1000,
  amount: 2,
  discount: 10
});

order1.addItem({
  name: "Mouse",
  price: 50,
  amount: 3,
  discount: 0
});

console.log("Total:", order1.calculateTotal());
console.log("Order object:", order1);


