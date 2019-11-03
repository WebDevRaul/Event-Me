import Validator from 'validator';
import isEmpty from '../../common/isEmpty/isEmpty';

const validateEvent = data => {
  let errors = {};

  // Check if Empty
  data.title = !isEmpty(data.title) ? data.title : '';
  data.date = !isEmpty(data.date) ? data.date : '';
  data.city = !isEmpty(data.city) ? data.city : '';
  data.location = !isEmpty(data.location) ? data.location : '';
  data.description = !isEmpty(data.description) ? data.description : '';

  // Validate Fields
  if (!Validator.isLength(data.title, { min:2, max: 30 })) {
    errors.title = 'Title must be between 2 and 30 characters';
  }
  if (!Validator.isLength(data.city, { min:2, max: 30 })) {
    errors.city = 'City must be between 2 and 30 characters';
  }
  if (!Validator.isLength(data.location, { min:2, max: 30 })) {
    errors.location = 'Location must be between 2 and 30 characters';
  }
  if (!Validator.isLength(data.description, { min:10, max: 500 })) {
    errors.description = 'Description must be between 10 and 500 characters';
  }

  // Validate Empty
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required!'
  }
  if (Validator.isEmpty(data.date)) {
    errors.date = 'Date field is required!'
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = 'City field is required!'
  }
  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location field is required!'
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required!'
  }

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateEvent;