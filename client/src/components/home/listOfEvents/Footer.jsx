import React from 'react';
import SubTitle from '../../common/subTitle/SubTitle';
import ButtonOne from '../../common/buttonOne/ButtonOne';

const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum obcaecati impedit est quaerat odio libero! Nostrum, voluptas atque dolore iusto cupiditate error harum minima, delectus aspernatur doloribus quibusdam incidunt numquam!';

const Footer = () => {
  const onView = () => {

  }
  
  return (
    <div className='footer'>
      <SubTitle text={text} />
      <ButtonOne text='View' isClass='blue' onClick={onView} />
    </div>
  )
}

export default Footer;