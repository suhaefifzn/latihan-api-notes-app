const InvariantError = require('../../exceptions/InvariantError');
const { ImgHeaderSchema } = require('./schema');

const UploadsValidator = {
  validateImageHeaders: (headers) => {
    const validationResult = ImgHeaderSchema.validate(headers);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UploadsValidator;