import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_events } from '../../../redux/selectors/event';

import Event from './Event';

import StyledHomeEvents from './Styled_Home_Events';

const HomeEvents = ({ state }) => {
  return (
    <StyledHomeEvents>
      <div className='list-of-events'>
        {state && state.map((evt, i) => <Event key={i} event={evt} />)}
      </div>
    </StyledHomeEvents>
  )
};

HomeEvents.propTypes = {
  state: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  state: state_events
});

export default connect(mapStateToProps, null)(HomeEvents);