import React from 'react';

import Title from '../common/title/Title';
import ButtonOne from '../common/buttonOne/ButtonOne';

const Header = () => {
  const date = new Date().toISOString().slice(0, 10);
  const name = 'Joana'
  return (
    <div className='header'>
      <div className='top'>
        <div>
        <Title text='Lorem, ipsum dolor.' />
        <p>{date}</p>
        <p>Sugested by <strong>{name}</strong></p>
        </div>
      </div>
      <div className='buttom'>
        <ButtonOne text='JOIN THIS EVENT' isClass='blue' />
      </div>
    </div>
  )
}

export default Header;