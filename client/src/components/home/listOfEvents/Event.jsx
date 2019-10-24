import React from 'react';

import Header from './Header';
import Body from './Body';
import Members from './Members';
import Footer from './Footer';

const Event = () => {
  return (
    <div className='event'>
      <Header />
      <Body />
      <Members />
      <Footer />
    </div>
  )
}

export default Event;