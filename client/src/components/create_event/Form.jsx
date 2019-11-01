import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import validateEvent from './utils/Validate';
import { connect } from 'react-redux';
import { create_event } from '../../redux/actions/event';
import { createStructuredSelector } from 'reselect';
import { state_isAuth, state_user } from '../../redux/selectors/user';

import ButtonOne from '../common/buttonOne/ButtonOne';
import Input from '../common/input/Input';
import TextArea from '../common/textarea/Textarea';

const Form = ({ create_event, isAuth, user: { name, id }, history }) => {
  const [ state, setState ] = useState({ title: '', date: '', city: '', location: '', description: '' });
  const [error, setErrors] = useState({
    title: undefined, date: undefined, city: undefined, location: undefined, description: undefined
  });
  const { title, date, city, location, description } = state;

  const onChange = e => setState({...state , [e.target.name]: e.target.value });

  const onFocus = e => {
    if(title || date || city || location || description !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: undefined });
    }
  };

  const onClick = () => {
    setState({ title: '', date: '', city: '', location: '', description: '' });
    setErrors({  title: undefined, date: undefined, city: undefined, location: undefined, description: undefined });
  }

  const onSubmit = e => {
    e.preventDefault();
    const event = { title, date, city, location, description, hostedBy: name , user_id: id};
    const { errors, isValid } = validateEvent(event);
    if(!isAuth) return null;
    if(!isValid) { setErrors({ ...error, ...errors }) } 
    else { create_event({ event, history }) }
  };

  return (
    <>
      <form noValidate onSubmit={onSubmit}>
        <Input 
          name='title' 
          label='Event Title' 
          value={title} 
          onChange={onChange} 
          onFocus={onFocus} 
          error={error.title}
        />
        <Input 
          name='date' 
          label='Event Date' 
          value={date} 
          onChange={onChange} 
          onFocus={onFocus} 
          error={error.date}
        />
        <Input 
          name='city' 
          label='City' 
          value={city} 
          onChange={onChange} 
          onFocus={onFocus} 
          error={error.city}
        />
        <Input 
          name='location' 
          label='Location' 
          value={location} 
          onChange={onChange} 
          onFocus={onFocus} 
          error={error.location}
        />
        <TextArea
          name='description' 
          label='description'
          text={description}
          onChange={onChange} 
          onFocus={onFocus} 
          error={error.description}
          />
          <ButtonOne isClass='green' text='Submit' type='submit' />
      </form>
      <ButtonOne isClass='blue' text='Cancel' onClick={onClick} />
    </>
  )
};

Form.propTypes = {
  create_event: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  name: PropTypes.string,
  history: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth,
  user: state_user
});

export default connect( mapStateToProps, { create_event })(withRouter(Form));