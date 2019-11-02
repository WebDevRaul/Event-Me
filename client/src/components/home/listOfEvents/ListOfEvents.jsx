import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_events } from '../../../redux/selectors/event';

import Event from './Event';

import StyledListOfEvents from './Styled_ListOfEvents';

const ListOfEvents = ({ state }) => {
  return (
    <StyledListOfEvents>
      <div className='list-of-events'>
        {state && state.map((evt, i) => <Event key={i} event={evt} />)}
      </div>
    </StyledListOfEvents>
  )
};

ListOfEvents.propTypes = {
  state: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  state: state_events
});

export default connect(mapStateToProps, null)(ListOfEvents);