import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import validateEvent from './utils/Validate';
import { connect } from 'react-redux';
import { create_event, update_event, clearEventErrors } from '../../redux/actions/event';
import { createStructuredSelector } from 'reselect';
import { state_user } from '../../redux/selectors/user';
import { state_events, state_event_error } from '../../redux/selectors/event';
import { filter_event } from '../../utils/filter_event' ;

import ButtonOne from '../common/buttonOne/ButtonOne';
import Input from '../common/Form/input/Input';
import TextArea from '../common/Form/textarea/Textarea';
import DateInput from '../common/Form/date/DateInput';
import isEmpty from '../common/utils/isEmpty/isEmpty';

const Form = ({ user, events, history, errors, create_event, update_event }) => {
  const [ state, setState ] = useState({ title: '', date: '', city: '', location: '', description: '', _id: '' });
  const [error, setErrors] = useState({title: '', date: '', city: '', location: '', description: ''});
  const { title, date, city, location, description, _id } = state;
  const { pathname } = history.location;
  
  // Update State CDU
  useEffect(() => {
    if(pathname.startsWith('/create-event')) {
      setState({ title: '', date: '', city: '', location: '', description: '' });
    } else {
      const root = pathname.startsWith('/home/') ? '/home/' : '/my-events/';
      const { event } = filter_event({ state: events, pathname, root });
      if(!!!event) return undefined;
      const { title, date, city, location, description, _id } = event;
      setState({ title, date, city, location, description, _id });
    }
    // eslint-disable-next-line
  }, [pathname]);
  
  // Update Errors CDU
  useEffect(() => { setErrors(errors) },[errors]);

  // Clear Errors CDUM
  useEffect(() => { 
    const clearE = () => clearEventErrors();
    return clearE;
    // eslint-disable-next-line
  },[])

  const onChange = e => setState({...state , [e.target.name]: e.target.value });
  const onChangeDate = e => setState({ ...state, date: String(e) });
  const onFocus = e => {
    if(title || date || city || location || description !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: '' });
    }
  };
  const onClick = () => {
    setState({ title: '', date: '', city: '', location: '', description: '' });
    setErrors({ title: '', date: '', city: '', location: '', description: '' });
  }
  const onSubmit = e => {
    e.preventDefault();
    let event = { title, date, city, location, description , id: user._id};
    const { errors, isValid } = validateEvent(event);
    if(!isValid) return setErrors({ ...error, ...errors });
    if(isEmpty(_id)) return create_event({ event, history });
    // Continue to Edit
    event = {...event, _id};
    update_event({ event, history })
  };
  return (
    <>
      <form noValidate onSubmit={onSubmit}>
        <Input name='title' label='Event Title' value={title} 
          onChange={onChange} onFocus={onFocus} error={error.title}
        />
        <DateInput name='date' value={date} label='date' onChange={e => onChangeDate(e)}
          error={error.date} onFocus={onFocus} date='dd LLL yyyy h:mm a' showTime={true} time='HH:mm'
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
  history: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  create_event: PropTypes.func.isRequired,
  update_event: PropTypes.func.isRequired,
  clearEventErrors: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  user: state_user,
  events: state_events,
  errors: state_event_error
});

export default connect( mapStateToProps, { create_event, update_event, clearEventErrors })(withRouter(Form));