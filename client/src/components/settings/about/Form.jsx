import React, { useState } from 'react';

import ButtonOne from '../../common/buttonOne/ButtonOne';
import Status from '../../common/Form/radio/Status';
import TextArea from '../../common/Form/textarea/Textarea';
import Input from '../../common/Form/input/Input';
import MultiSelect from '../../common/Form/multi_select/Multi_Select';
import validateAbout from '../utils/ValidateAbout';

const Form = () => {
  const [state, setState] = useState({ status: '', bio: '', select: [], ocupation: '', country: '' });
  const [error, setErrors] = useState({ status: '', bio: '', select: '', ocupation: '', country: '' });

  const { status, bio, select, ocupation, country } = state;

  const onChange = e => {
    setState({...state , [e.target.name]: e.target.value });
  }
  const onChangeSelect = val => {
    if(!!!val) return setState({ ...state, select: [] })
    setState({ ...state, select: [val] })
  }
  const onFocus = e => {
    if(status || bio || select || ocupation || country !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: '' });
    }
  };


  const onSubmit = e => {
    e.preventDefault();
    const { errors, isValid } = validateAbout(state);
    if(!isValid) { setErrors({ ...error, ...errors }) }
    else {  }
  }
  
  return (
    <form noValidate onSubmit={onSubmit}>
      <div className='form'>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <Status 
          name='status'
          value={status}
          onClick={onChange} 
          onFocus={onFocus} 
          error={error.status}
        />
        <>
          <p>Tell us about yourself:</p>
          <TextArea 
            name='bio' 
            label='About-me' 
            text={bio}
            onChange={onChange} 
            onFocus={onFocus} 
            error={error.bio}
          />
        </>
        <MultiSelect
          value={select}
          label='Hobbies'
          onChange={onChangeSelect}
          onFocus={e => {}}
          error={error.select}
        />
        <Input
          name='ocupation'
          label='Ocupation'
          value={ocupation}
          onChange={onChange}
          onFocus={onFocus}
          error={error.ocupation}
        />
        <Input
          name='country'
          label='Country'
          value={country}
          onChange={onChange}
          onFocus={onFocus}
          error={error.country}
        />
      </div>
      <ButtonOne text='Update Profile' type='submit' isClass='green' />
    </form>
  )
}

export default Form;