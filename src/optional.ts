interface IUser {
  login: string;
  password?: string;
}

const optionalUse1: IUser = {
  login: "a",
  password: "a",
};

const optionalUser2: IUser = {
  login: "a",
};

const multiply = (a: number, b?: number): number => (b ? a * b : a * a);

multiply(5);

interface IUserPro {
  login: string;
  password?: {
    type: "primary" | "secondary";
  };
}

const testPass = (user: IUserPro) => {
  const t = user.password?.type;

  return t;
};

const test = (param?: string) => {
  const t = param ?? multiply(5);

  return t;
};
