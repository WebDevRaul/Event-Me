import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import validateEvent from './utils/Validate';
import { connect } from 'react-redux';
import { create_event } from '../../redux/actions/event';
import { createStructuredSelector } from 'reselect';
import { state_user } from '../../redux/selectors/user';
import { state_events } from '../../redux/selectors/event';
// import { filter_event } from '../../utils/filter_event' ;

import ButtonOne from '../common/buttonOne/ButtonOne';
import Input from '../common/input/Input';
import TextArea from '../common/textarea/Textarea';

const Form = ({ create_event,  user, history, events }) => {
  const [ state, setState ] = useState({ title: 'Trip to Odessa', date: '01/01/2020', city: 'Odessa', location: 'Odessa / Ukraine', description: 'Visiting old town' });
  const [error, setErrors] = useState({
    title: undefined, date: undefined, city: undefined, location: undefined, description: undefined
  });
  const { title, date, city, location, description } = state;
  // const { pathname } = history.location;
  
  // useEffect(() => {
  //   const { event } = filter_event({ state: events, pathname, root: '/my-events/manage-event/' });
  //   if(!!!event) return undefined;
  //   const { title, date, city, location, description, id, members } = event;
  //   setState({ title, date, city, location, description, id, members});
  // }, [events, pathname])

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
    const { user_id } = user;
    const event = { title, date, city, location, description , author: user_id};
    const { errors, isValid } = validateEvent(event);
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
  name: PropTypes.string,
  history: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  user: state_user,
  events: state_events
});

export default connect( mapStateToProps, { create_event })(withRouter(Form));