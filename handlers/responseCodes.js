const responseCode = {
    SUCCESS: {
      code: 200,
      name: true, // changed from "Ok"
    },
    CREATED: {
      code: 201,
      name: "Created",
    },
    ACCEPTED: {
      code: 202,
      name: "Created",
    },
    NO_CONTENT: {
      code: 204,
      name: "No Content",
    },
    NOT_FOUND: {
      code: 404,
      name: "Not Found",
    },
    BAD_REQUEST: {
      code: 400,
      name: "Bad Request",
    },
    FORBIDDEN: {
      code: 403,
      name: "Forbidden",
    },
    UNAUTHORIZED: {
      code: 401,
      name: "Unauthorized",
    },
    CONFLICT: {
      code: 409,
      name: "Conflict",
    },
    SERVER: {
      code: 500,
      name: "Internal Server Error",
    },
    MISSING: {
      code: 422,
      name: "Missing Parameter",
    },
    UNIQUE_DATA: {
      code: 500,
      name: "DuplicateKey",
    },
    SYNTAX: {
      code: 500,
      name: "Syntax Error",
    },
  };
  module.exports = responseCode;
  