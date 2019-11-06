import Validator from 'validator';
import isEmpty from '../../common/utils/isEmpty/isEmpty';

const validateBasic = ({ first_name, last_name, birthday, town }) => {
  let errors = {};
  
  // Check if Empty
  first_name = !isEmpty(first_name) ? first_name : '';
  last_name = !isEmpty(last_name) ? last_name : '';
  birthday = !isEmpty(birthday) ? birthday : '';
  town = !isEmpty(town) ? town : '';

   // Validate Names
   if (!Validator.isLength(first_name, { min:2, max: 30 })) {
    errors.first_name = 'First name must be between 2 and 30 characters';
  }
  if (!Validator.isLength(last_name, { min:2, max: 30 })) {
    errors.last_name = 'Last name must be between 2 and 30 characters';
  }
  // Validate town
  if (!Validator.isLength(town, {max: 85})) {
    errors.town = 'Town must be less then 86 characters';
  }
  // Validate Empty
  if (Validator.isEmpty(first_name)) {
    errors.first_name = 'First name field is required!'
  }
  if (Validator.isEmpty(last_name)) {
    errors.last_name = 'Last name field is required!'
  }
  if (Validator.isEmpty(birthday)) {
    errors.birthday = 'Birthday field is required!'
  }
  if (Validator.isEmpty(town)) {
    errors.town = 'Town field is required!'
  }

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateBasic;