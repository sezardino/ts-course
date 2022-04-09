const logTypes = (value: string | number | boolean): void => {
  if (typeof value === "string") {
    console.log(`${value} is a string`);
  } else if (typeof value === "number") {
    console.log(`${value} is a number`);
  } else {
    console.log(`${value} is a boolean`);
  }
};

const logError = (value: string | string[]): void => {
  if (Array.isArray(value)) {
    console.log(`${value} is an array`);
  } else {
    console.log(`${value} is a string`);
  }
};

const logObject = (obj: { a: number } | { b: number }): void => {
  if ("a" in obj) {
    console.log(`${obj.a} is a number`);
  } else {
    console.log(`${obj.b} is a number`);
  }
};
