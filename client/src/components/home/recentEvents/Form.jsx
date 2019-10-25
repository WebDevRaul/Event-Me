import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/input/Input';
import ButtonOne from '../../common/buttonOne/ButtonOne';

const Form = ({ onToggle }) => {
  const [ state, setState ] = useState({ title: '', date: '', city: '', location: '', hosted: ''});
  const { title, date, city, location, hosted } = state;

  const onChange = e => setState({...state , [e.target.name]: e.target.value })
  const onFocus = () => {}

  return (
    <form noValidate>
      <Input name='title' label='Event Title' value={title} onChange={onChange} onFocus={onFocus} error=''/>
      <Input name='date' label='Event Date' value={date} onChange={onChange} onFocus={onFocus} type='text' error=''/>
      <Input name='city' label='City' value={city} onChange={onChange} onFocus={onFocus} error=''/>
      <Input name='location' label='Location' value={location} onChange={onChange} onFocus={onFocus} error=''/>
      <Input name='hosted' label='Hosted By' value={hosted} onChange={onChange} onFocus={onFocus} error=''/>
      <div className='submit'>
        <ButtonOne isClass='green' text='Submit' type='submit' />
        <ButtonOne isClass='black' text='Cancel' onClick={onToggle} />
      </div>
    </form>
  )
};

Form.propTypes = {
  onToggle: PropTypes.func.isRequired
};

export default Form;