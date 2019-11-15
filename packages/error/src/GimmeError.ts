class GimmeError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message || 'Uh Oh! There was an error! Please review the stacktrace';
    this.stack = new Error(message).stack;
  }
}

export default GimmeError;
