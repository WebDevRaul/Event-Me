import Validator from 'validator';
import isEmpty from '../../common/isEmpty/isEmpty';

const validateEvent = data => {
  let errors = {};

  // Check if Empty
  data.title = !isEmpty(data.title) ? data.title : '';

  // Validate Name
  if (!Validator.isLength(data.title, { min:2, max: 30 })) {
    errors.title = 'Title must be between 2 and 30 characters';
  }

  // Validate Empty
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required!'
  }

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateEvent;