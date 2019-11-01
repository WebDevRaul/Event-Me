import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_events } from '../../redux/selectors/event';

import StyledEventInfo from './Styled_EventInfo';
import NotFound from '../not_Found/NotFound';
import Event from '../../components/common/event/Event';

const EventInfo = ({ state, history: { location: { pathname } } }) => {
  const end_id = pathname.slice(10).indexOf('-');
  const event_id = pathname.slice(10).slice(0, end_id); 
  const [event] = state.filter(i => i.id === event_id);
  if(!!!event) return <NotFound />

  return (
    <StyledEventInfo>
      <Event state={event} />
    </StyledEventInfo>
  )
};

EventInfo.propTypes = {
  state: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
}

const mapStateToProps = createStructuredSelector({
  state: state_events
});

export default connect(mapStateToProps, null)(EventInfo);