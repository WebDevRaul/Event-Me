import Validator from 'validator';
import isEmpty from '../../common/utils/isEmpty/isEmpty';

const validateAbout = ({ status, bio, select, ocupation, country }) => {
  let errors = {};
  
  // Check if Empty
  status = !isEmpty(status) ? status : '';
  bio = !isEmpty(bio) ? bio : '';
  select = !isEmpty(select) ? select : '';
  ocupation = !isEmpty(ocupation) ? ocupation : '';
  country = !isEmpty(country) ? country : '';

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

export default validateAbout;