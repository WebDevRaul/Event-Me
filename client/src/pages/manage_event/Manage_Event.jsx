import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_events } from '../../redux/selectors/event';
import { filter_event } from '../../utils/filter_event';

import NotFound from '../not_Found/NotFound';

import StyledManageEvent from './Styled_Manage_Event';
import Event from '../../components/common/event/Event';

const ManageEvent = ({ history: { location: { pathname } }, state }) => {
  const { event } = filter_event({ state, pathname, root: '/home/' });
  if(!!!event) return <NotFound />
  return (
    <StyledManageEvent>
      <Event state={event} edit={true} />
    </StyledManageEvent>
  )
};

ManageEvent.propTypes = {
  state: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  state: state_events
});

export default connect(mapStateToProps, null)(ManageEvent);