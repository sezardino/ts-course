class UserConstructor {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(arg?: string | number, age?: number) {
    if (typeof arg === "string") {
      this.name = arg;
    } else if (typeof arg === "number") {
      this.age = arg;
    }

    if (typeof age === "number") {
      this.age = age;
    }
  }
}

const user1 = new UserConstructor();
const user2 = new UserConstructor("John");
const user3 = new UserConstructor(33);
const user4 = new UserConstructor("John", 33);
