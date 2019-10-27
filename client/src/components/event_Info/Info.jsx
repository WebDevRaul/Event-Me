import React from 'react';
import SubTitle from '../common/subTitle/SubTitle';

const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam saepe ex eum dolore velit ullam fuga accusamus sint id dolorum.'
const date = new Date().toISOString().slice(0, 10);

const Info = () => {
  return (
    <div className='info'>
      <SubTitle text={text} />
      <p><time>{date}</time></p>
      <p>map location</p>
    </div>
  )
}

export default Info;