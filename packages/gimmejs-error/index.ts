class GimmeError extends Error {
  constructor(message: string = 'Uh Oh! There was an error! Please review the stacktrace') {
    super(message);
    this.name = 'GimmeError';
  }
}

export default GimmeError;
