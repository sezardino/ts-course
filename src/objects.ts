const userMapper = (user: { name: string; surname: string }): string => {
  return `${user.name} ${user.surname}`;
};

const user = {
  name: "John",
  surname: "Smith",
  city: "New York",
  age: 30,
};

console.log(userMapper(user));

const office: {
  officeID: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
} = {
  officeID: 1,
  isOpened: false,
  contacts: {
    phone: "123456789",
    email: "email@email.com",
    address: {
      city: "New York",
    },
  },
};
