import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { select_event } from '../../../redux/actions/event';

import SubTitle from '../../common/subTitle/SubTitle';
import ButtonOne from '../../common/buttonOne/ButtonOne';

const Footer = ({ description, title, id, history, select_event }) => {
  const name = title.split(' ').join('-');
  const onClick = () => {
    history.push(`/event-me/${name}`)
    // Send ID to redux to repopulate the new component
    select_event(id)
  }
  return (
    <div className='footer'>
      <SubTitle text={description} />
        <ButtonOne text='View' onClick={onClick} isClass='blue' />
    </div>
  )
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  select_event: PropTypes.func.isRequired
}

export default connect(null, { select_event })(withRouter(Footer));