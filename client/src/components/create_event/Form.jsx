import React, { useState } from 'react';
import ButtonOne from '../common/buttonOne/ButtonOne';
import Input from '../common/input/Input';

const Form = () => {
  const [ state, setState ] = useState({ title: '', date: '', city: '', location: '', hosted: ''});
  const [error, setError] = useState({});
  const { title, date, city, location, hosted } = state;

  const onChange = e => setState({...state , [e.target.name]: e.target.value });
  const onClick = () => {}
  const onFocus = () => {};
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
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
      <Input 
        name='hosted' 
        label='Hosted By' 
        value={hosted} 
        onChange={onChange} 
        onFocus={onFocus} 
        error={error.hosted}
      />
      <div className='submit'>
        <ButtonOne isClass='green' text='submit' type='submit' />
        <ButtonOne isClass='blue' text='Cancel' onClick={onClick} />
      </div>
    </form>
  )
}

export default Form;