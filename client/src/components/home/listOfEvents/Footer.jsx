import React from 'react';
import SubTitle from '../../common/subTitle/SubTitle';
import ButtonOne from '../../common/buttonOne/ButtonOne';


const Footer = () => {
  const text = 'Lorem ipsum ';
  return (
    <div className='footer'>
      <SubTitle text={text} />
      <ButtonOne text='View' isClass='blue' />
    </div>
  )
}

export default Footer;