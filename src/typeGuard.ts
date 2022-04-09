interface Car {
  model: string;
}

type CarClass = "economy" | "compact" | "standard" | "premium";

interface CarWithClass {
  model: string;
  class: CarClass;
}

const isCarWithClass = (car: CarWithClass | Car): car is CarWithClass =>
  "class" in car;

const setClass = (car: CarWithClass | Car, c: CarClass) => {
  if (isCarWithClass(car)) {
    car.class = c;
  } else {
    throw new Error("Not a car with class");
  }
};
