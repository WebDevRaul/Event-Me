import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../common/title/Title'

const Info = ({ name, ocupation, country, bio, hobbies }) => {
  return (
    <div className='info'>
      <Title text={`About ${name}`} />
      <div className='row no-gutters'>
        <div className='col-sm-8'>
          <div className='body'>
            <div className='ocupation'>I am a: <span>{ocupation}</span></div>
            <div className='country'>Originally from: <span>{country}</span></div>
            <div className='join-date'>Member Since: <span>bring date</span></div>
            <p>{bio}</p> 
          </div>
        </div>
        <div className='col-sm-4'>
          <Title text='Interests' />
          <ul>
            {
              hobbies &&
              hobbies.map(({ value }) => <li key={value}>{value}</li>)
            }
          </ul>
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
