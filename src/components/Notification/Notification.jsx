import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({ massage }) {
  return (
    <>
      <p>{massage}</p>
    </>
  );
}

Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};
