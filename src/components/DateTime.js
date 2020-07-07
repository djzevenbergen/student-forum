import React from 'react';
import PropTypes from 'prop-types';

function DateTime(props) {
  const unix_timestamp = parseInt(props.time);
  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  //console.log(formattedTime);

  return (
    <React.Fragment>
      <h3>{formattedTime}</h3>
    </React.Fragment>
  );
};

DateTime.propTypes = {
  time: PropTypes.number
}

export default DateTime;