import Validator from 'validator';
import isEmpty from '../../common/utils/isEmpty/isEmpty';

const validateEvent = ({ title, date, city, location, description }) => {
  let errors = {};

  // Check if Empty
  title = !isEmpty(title) ? title : '';
  date = !isEmpty(date) ? date : '';
  city = !isEmpty(city) ? city : '';
  location = !isEmpty(location) ? location : '';
  description = !isEmpty(description) ? description : '';

  // Validate Fields
  if (!Validator.isLength(title, { min:2, max: 30 })) {
    errors.title = 'Title must be between 2 and 30 characters';
  }
  if (!Validator.isLength(city, { min:2, max: 30 })) {
    errors.city = 'City must be between 2 and 30 characters';
  }
  if (!Validator.isLength(location, { min:2, max: 50 })) {
    errors.location = 'Location must be between 2 and 50 characters';
  }
  if (!Validator.isLength(description, { min:10, max: 500 })) {
    errors.description = 'Description must be between 10 and 500 characters';
  }

  // Validate Empty
  if (Validator.isEmpty(title)) {
    errors.title = 'Title field is required!'
  }
  if (Validator.isEmpty(date)) {
    errors.date = 'Date field is required!'
  }
  if (Validator.isEmpty(city)) {
    errors.city = 'City field is required!'
  }
  if (Validator.isEmpty(location)) {
    errors.location = 'Location field is required!'
  }
  if (Validator.isEmpty(description)) {
    errors.description = 'Description field is required!'
  }

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateEvent;