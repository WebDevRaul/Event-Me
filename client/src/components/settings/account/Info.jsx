import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../common/title/Title';

const Info = ({ name, ocupation, country, bio, hobbies }) => {
  return (
    <div className='info'>
      <div className='row no-gutters'>
        <div className='col-sm-8'>
          <Title text={`About ${name}`} />
          <div className='body'>
            <p className='ocupation'>I am a: <span>{ocupation}</span></p>
            <p className='country'>Originally from: <span>{country}</span></p>
            <p className='join-date'>Member Since: <span>bring date</span></p>
            <p>{bio}</p> 
          </div>
        </div>
        <div className='col-sm-4'>
            <Title text='Interests' />
            <div className='side-body'>
              <ul>
                {
                  hobbies &&
                  hobbies.map(({ value }) => <li key={value}>{value}</li>)
                }
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

Info.propTypes = {
  name: PropTypes.string.isRequired,
  ocupation: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
}

export default Info
