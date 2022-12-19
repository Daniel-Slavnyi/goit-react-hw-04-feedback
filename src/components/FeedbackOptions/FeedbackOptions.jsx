import React from 'react';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <ul>
        {options.map(btn => (
          <li key={btn}>
            <button type="button" name={btn} onClick={onLeaveFeedback}>
              {btn}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
