import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import { Text, WrapList } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total() > 0 ? (
        <WrapList>
          <li>
            <Text>Good: {good}</Text>
          </li>
          <li>
            <Text>Neutral: {neutral}</Text>
          </li>
          <li>
            <Text>Bad: {bad}</Text>
          </li>
          <li>
            <Text>Total: {total()}</Text>
          </li>
          <li>
            <Text>Positive feedback: {positivePercentage()}%</Text>
          </li>
        </WrapList>
      ) : (
        <Notification massage="There is no feedback" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
