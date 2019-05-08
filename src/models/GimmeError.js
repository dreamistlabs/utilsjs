class GimmeError extends Error {
  constructor(
    errorType,
    message = 'Uh Oh! There was an error! Please review the stacktrace',
    ...args
  ) {
    super(...args);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GimmeError);
    }

    this.name = this.constructor.name;
    this.message = `(${errorType}) ${message}`;
    this.stack = new Error(message).stack;
  }
}

export default GimmeError;
