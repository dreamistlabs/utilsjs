module.exports = class GimmeError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message || 'Uh Oh! There was an error! Please review the stacktrace';
    this.stack = (new Error(message)).stack;
  }
}