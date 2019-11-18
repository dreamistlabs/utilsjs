const defaultMsg = 'Uh Oh! There was an error! Please review the stacktrace';

class GimmeError extends Error {
  constructor(message: string = defaultMsg) {
    super(message);
    this.name = 'GimmeError';
  }
}

export default GimmeError;
