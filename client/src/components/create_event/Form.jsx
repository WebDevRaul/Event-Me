import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import validateEvent from './utils/Validate';
import { connect } from 'react-redux';
import { create_event, clearEventErrors } from '../../redux/actions/event';
import { createStructuredSelector } from 'reselect';
import { state_user } from '../../redux/selectors/user';
import { state_events, state_event_error } from '../../redux/selectors/event';
import { filter_event } from '../../utils/filter_event' ;

import ButtonOne from '../common/buttonOne/ButtonOne';
import Input from '../common/input/Input';
import TextArea from '../common/textarea/Textarea';
import DateInput from '../common/date/DateInput';
import isEmpty from '../common/isEmpty/isEmpty';

const Form = ({ create_event,  user, history, events, errors, clearEventErrors }) => {
  const [ state, setState ] = useState({ title: 'Trip to Odessa', date: '', city: 'Odessa', location: 'Ukraine', description: 'Visiting old town', _id: '' });
  const [error, setErrors] = useState({title: '', date: '', city: '', location: '', description: ''});
  const { title, date, city, location, description, _id } = state;
  const { pathname } = history.location;
  // Clear Errors
  useEffect(() => { const clear = () => clearEventErrors(); return clear; },[clearEventErrors]);
  // Update Errors
  useEffect(() => { setErrors(errors) },[errors]);
  // Clear state if path is create-event
  useEffect(() => { 
    if(pathname.startsWith('/home/')) return undefined;
    setState({ title: '', date: '', city: '', location: '', description: '' })
   },[pathname])
  // Update State 
  useEffect(() => {
    const { event } = filter_event({ state: events, pathname, root: '/home/' });
    if(!!!event) return undefined;
    const { title, date, city, location, description, _id } = event;
    setState({ title, date, city, location, description, _id });
  }, [pathname, events]);

  const onChange = e => setState({...state , [e.target.name]: e.target.value });
  const onChangeDate = e => setState({ ...state, date: String(e) });
  const onFocus = e => {
    if(title || date || city || location || description !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: undefined });
    }
  };
  const onClick = () => {
    setState({ title: '', date: '', city: '', location: '', description: '' });
    setErrors({ title: '', date: '', city: '', location: '', description: '' });
  }
  const onSubmit = e => {
    e.preventDefault();
    const { user_id } = user;
    let event = { title, date, city, location, description , author: user_id};
    if(!isEmpty(_id)) event = {...event, _id}
    const { errors, isValid } = validateEvent(event);
    if(!isValid) { setErrors({ ...error, ...errors }) } 
    else { create_event({ event, history }) }
  };

  return (
    <>
      <form noValidate onSubmit={onSubmit}>
        <Input name='title' label='Event Title' value={title} 
          onChange={onChange} onFocus={onFocus} error={error.title}
        />
        <DateInput value={date} onChange={e => onChangeDate(e)}
          error={error.date} onFocus={onFocus}
        />
        <Input name='city' label='City' value={city} 
          onChange={onChange} onFocus={onFocus} error={error.city}
        />
        <Input name='location' label='Location' value={location} 
          onChange={onChange} onFocus={onFocus} error={error.location}
        />
        <TextArea name='description' label='description' text={description}
          onChange={onChange} onFocus={onFocus} error={error.description}
        />
        <ButtonOne isClass='green' text='Submit' type='submit' />
      </form>
      <ButtonOne isClass='blue' text='Cancel' onClick={onClick} />
    </>
  )
};

Form.propTypes = {
  create_event: PropTypes.func.isRequired,
  name: PropTypes.string,
  history: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  clearEventErrors: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  user: state_user,
  events: state_events,
  errors: state_event_error
});

export default connect( mapStateToProps, { create_event, clearEventErrors })(withRouter(Form));