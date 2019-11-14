import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_user_profile, state_user_name } from '../../../redux/selectors/user';
import Title from '../../common/title/Title';

import Header from './Header';
import Info from './Info';
import Events from './Events';

import StyledAccount from './Styled_Account';

const Account = ({ profile, name }) => {
  const { ocupation, country, birthday, image } = profile;
  return (
    <StyledAccount>
      <div className='account'>
        <Title text='Account' />
        <Header 
          photo={image[0].secure_url} 
          name={name} 
          ocupation={ocupation} 
          country={country} 
          birthday={birthday}
        />
        <Info />
        <Events />
      </div>
    </StyledAccount>
  )
}

Account.propTypes = {
  profile: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

const mapStateToProps = createStructuredSelector({
  profile: state_user_profile,
  name: state_user_name
});

export default connect(mapStateToProps, { })(Account);