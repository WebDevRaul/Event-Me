import React, { useState } from 'react';
import ButtonOne from '../common/buttonOne/ButtonOne';
import Input from '../common/input/Input';
import validateEvent from './utils/Validate';
import TextArea from '../common/textarea/Textarea';

const Form = () => {
  const [ state, setState ] = useState({ title: '', date: '', city: '', location: '', description: ''});
  const [error, setErrors] = useState({
    title: undefined, date: undefined, city: undefined, location: undefined, description: undefined
  });
  const { title, date, city, location, description } = state;

  const onChange = e => setState({...state , [e.target.name]: e.target.value });

  const onClick = () => {}

  const onFocus = e => {
    if(title || date || city || location || description !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: undefined });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const data = { title, date, city, location, description };
    const { errors, isValid } = validateEvent(data);
    if(!isValid) { setErrors({ ...error, ...errors }) } 
    else {  }
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
      <TextArea
        name='description' 
        label='description'
        text={description}
        onChange={onChange} 
        onFocus={onFocus} 
        error={error.description}
        />
      <div className='submit'>
        <ButtonOne isClass='green' text='submit' type='submit' />
        <ButtonOne isClass='blue' text='Cancel' onClick={onClick} />
      </div>
    </form>
  )
}

export default Form;