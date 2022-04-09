type User = {
  id: string;
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

const user: User = {
  id: "1",
  age: 1,
  name: "a",
};

const userWithRole: UserWithRole = {
  id: "2",
  age: 1,
  name: "b",
  role: "admin",
};
