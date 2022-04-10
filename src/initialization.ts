class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Admin {
  role: number;
}

const john = new User("John");
const admin = new Admin();
admin.role = 1;
