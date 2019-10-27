import React from 'react';

import Title from '../common/title/Title';
import ButtonOne from '../common/buttonOne/ButtonOne';

const date = new Date().toISOString().slice(0, 10);
const name = 'Joana'

const Header = () => {
  return (
    <div className='header'>
      <div className='top'>
        <div>
        <Title text='Lorem, ipsum dolor.' />
        <time>{date}</time>
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