import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_events } from '../../redux/selectors/event';
import { filter_event } from '../../utils/filter_event';

import StyledEventInfo from './Styled_EventInfo';
import NotFound from '../not_Found/NotFound';
import Event from '../../components/common/event/Event';

const EventInfo = ({ state, history: { location: { pathname } } }) => {
  const { event } = filter_event({ state, pathname, root: '/home/' })
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