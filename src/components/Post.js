import Recat from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h1>Post Details</h1>
        <h3>{props.title} - {props.upvotes}</h3>
        <hr />
      </div>
    </React.Fragment>

  );
}
