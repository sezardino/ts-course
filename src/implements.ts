interface ILogger {
  log(...args: any[]): void;
  error(...args: any[]): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  error(...args: any[]): void {
    console.log(...args);
  }
}
