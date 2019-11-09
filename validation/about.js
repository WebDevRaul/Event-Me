const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateAbout({ status, bio, select, ocupation, country }) {
  let errors = {};
  
  // Check if Empty
  status = !isEmpty(status) ? status : '';
  bio = !isEmpty(bio) ? bio : '';
  select = !isEmpty(select) ? 'has value' : '';
  ocupation = !isEmpty(ocupation) ? ocupation : '';
  country = !isEmpty(country) ? country : '';

  // Validate Data
  if (!Validator.isLength(bio, { min:10, max: 500 })) {
    errors.bio = 'About Me must be between 10 and 500 characters';
  }
  if (!Validator.isLength(ocupation, { max: 100 })) {
    errors.ocupation = 'Ocupation cannot exceed 100 characthers';
  }
  if (!Validator.isLength(country, { min:4, max: 48 })) {
    errors.country = 'Country must be between 4 and 48 characters';
  }

  // Validate Empty
  if (Validator.isEmpty(status)) {
    errors.status = 'Status field is required!'
  }
  if (Validator.isEmpty(bio)) {
    errors.bio = 'About me field is required!'
  }
  if (Validator.isEmpty(select)) {
    errors.select = 'Hobbies field is required!'
  }
  if (Validator.isEmpty(ocupation)) {
    errors.ocupation = 'Ocupation field is required!'
  }
  if (Validator.isEmpty(country)) {
    errors.country = 'Country field is required!'
  }

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}