class Customer {
  id: number;
  name: string;
  email: string;
  phone: string;

  constructor(id: number, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  displayInfo(): void {
    console.log("----- Customer Info -----");
    console.log("ID:", this.id);
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Phone:", this.phone);
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
  }
}

// ====== Test nhanh ======
const c1 = new Customer(1, "Nghia", "nghia@gmail.com", "0901234567");

c1.displayInfo();

c1.updateEmail("nghia.new@gmail.com");
console.log("\nAfter update email:");
c1.displayInfo();