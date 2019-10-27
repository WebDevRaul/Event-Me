import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_event } from '../../../redux/selectors/event';

import Event from './Event';

import StyledListOfEvents from './Styled_ListOfEvents';
import isEmpty from '../../common/isEmpty/isEmpty';

const ListOfEvents = ({ state: { events } }) => {
  return (
    <StyledListOfEvents>
      <div className='list-of-events'>
        {!isEmpty(events) && events.map((evt, i) => <Event key={i} event={evt} />)}
      </div>
    </StyledListOfEvents>
  )
};

ListOfEvents.propTypes = {
  state: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  state: state_event
});

export default connect(mapStateToProps, null)(ListOfEvents);