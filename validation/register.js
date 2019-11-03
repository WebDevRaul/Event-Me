const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegister(user) {
  let errors = {};

  // Check if Empty
  user.first_name = !isEmpty(user.first_name) ? user.first_name : '';
  user.last_name = !isEmpty(user.last_name) ? user.last_name : '';
  user.email = !isEmpty(user.email) ? user.email : '';
  user.password = !isEmpty(user.password) ? user.password : '';
  user.password2 = !isEmpty(user.password2) ? user.password2 : '';

  // Validate Names
  if (!Validator.isLength(user.first_name, { min:2, max: 30 })) {
    errors.first_name = 'First name must be between 2 and 30 characters';
  }
  if (!Validator.isLength(user.last_name, { min:2, max: 30 })) {
    errors.last_name = 'Last name must be between 2 and 30 characters';
  }
  // Validate email
  if (!Validator.isEmail(user.email)) {
    errors.email = 'Email is invalid';
  }
  // Validate password
  if (!Validator.isLength(user.password, {min:6, max: 30})) {
    errors.password = 'Password must be at least 6 characters';
  }
  // Validate password to match password2
  if (!Validator.equals(user.password, user.password2)) {
    errors.password2 = 'Passwords must match';
  }

  // Validate Empty
  if (Validator.isEmpty(user.first_name)) {
    errors.first_name = 'First name field is required!'
  }
  if (Validator.isEmpty(user.last_name)) {
    errors.last_name = 'Last name field is required!'
  }
  if (Validator.isEmpty(user.email)) {
    errors.email = 'Email field is required!'
  }
  if (Validator.isEmpty(user.password)) {
    errors.password = 'Password field is required!'
  }
  if (Validator.isEmpty(user.password2)) {
    errors.password2 = 'Confirm Password field is required!'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};