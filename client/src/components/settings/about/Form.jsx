import React, { useState } from 'react';

import ButtonOne from '../../common/buttonOne/ButtonOne';
import Status from '../../common/Form/radio/Status';
import TextArea from '../../common/Form/textarea/Textarea';
import Input from '../../common/Form/input/Input';
import MultiSelect from '../../common/Form/multi_select/Multi_Select';

const Form = () => {
  const [state, setState] = useState({ status: '', bio: '', ocupation: '', country: '' });
  const [error, setErrors] = useState({ status: '', bio: '', ocupation: '', country: '' });

  const { status, bio, ocupation, country } = state;

  const onChange = e => setState({...state , [e.target.name]: e.target.value });
  const onFocus = e => {
    if(status || bio || ocupation || country !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: '' });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <form noValidate onSubmit={onSubmit}>
      <div className='form'>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <Status 
          value={status}
          name='status'
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
        <MultiSelect />
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