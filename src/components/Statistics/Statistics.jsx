import React from 'react';
import Notification from 'components/Notification/Notification';

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
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {total()}</p>
          </li>
          <li>
            <p>Positive feedback: {positivePercentage()}%</p>
          </li>
        </ul>
      ) : (
        <Notification massage="There is no feedback" />
      )}
    </>
  );
}
