import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { update_basic } from '../../../redux/actions/profile';
import { createStructuredSelector } from 'reselect';

import ButtonOne from '../../common/buttonOne/ButtonOne';
import Input from '../../common/input/Input';
import DateInput from '../../common/date/DateInput';

const Form = ({ update_basic }) => {
  const [state, setState] = useState({ first_name: '', last_name: '', birthday: '', town: ''});
  const [error, setErrors] = useState({ first_name: '', last_name: '', birthday: '', town: ''});
  const { first_name, last_name, birthday, town } = state;

  const onChange = e => setState({...state, [e.target.name]: e.target.value });
  const onChangeDate = e => setState({ ...state, birthday: String(e) });
  const onFocus = e => {
    if(first_name || last_name || birthday || town !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: undefined });
    }
  }
  const onSubmit = e => {
    e.preventDefault();
    update_basic({ ...state })
  }

  return (
    <form noValidate onSubmit={onSubmit}>
      <div className='form'>
        <Input
          name='first_name'
          label='First Name'
          value={first_name}
          onChange={onChange}
          onFocus={onFocus}
          error={error.first_name}
        />
        <Input
          name='last_name'
          label='Last Name'
          value={last_name}
          onChange={onChange}
          onFocus={onFocus}
          error={error.last_name}
        />
        <DateInput
          name='Birthday'
          value={birthday} 
          onChange={e => onChangeDate(e)}
          onFocus={onFocus}
          error={error.date} 
        />
        <Input 
          name='town'
          label='Home Town'
          value={town}
          onChange={onChange}
          onFocus={onFocus}
          error={error.town}
      />
      </div>
      <ButtonOne text='Update Profile' type='submit' isClass='green' />
    </form>
  )
};

Form.propTypes = {
  update_basic: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({

});

export default connect( mapStateToProps, { update_basic } )(Form);