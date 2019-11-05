import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  } from '../../redux/actions/user';
import { createStructuredSelector } from 'reselect';
import { state_private_events } from '../../redux/selectors/event';

import StyledMyEvents from './Styled_My_Events';
import Event from '../../components/common/event/Event';

const MyEvents = ({ events }) => {
  return (
    <StyledMyEvents>
      { events.map((i, index) => <Event key={index} state={i} update={false} />) }
    </StyledMyEvents>
  )
};

MyEvents.propTypes = {
  events: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  events: state_private_events
});

export default connect(mapStateToProps, null)(MyEvents);