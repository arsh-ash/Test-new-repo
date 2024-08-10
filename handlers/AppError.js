class ErrorResponse extends Error {
    constructor(name, message, statusCode,) {
      super(message);
      this.statusCode = statusCode;
      this.name = name;
      // adding the api success status
      // this.status = successStatus;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = ErrorResponse;
  