const generateError = (message: string): never => {
  throw new Error(message);
};

const dumpError = (error: Error): never => {
  while (true) {
    console.log(error.message);
  }
};

const rec = (): never => {
  return rec();
};

type paymentAction = "refund" | "checkout";

const processAction = (action: paymentAction) => {
  switch (action) {
    case "checkout":
      //
      break;
    case "refund":
      //
      break;
    default:
      const _: never = action;
      throw new Error("Unknown action");
  }
};
