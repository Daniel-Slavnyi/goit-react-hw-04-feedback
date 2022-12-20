import React from 'react';
import { Button, WrapBtn } from './FeedbackOptions.module';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <WrapBtn>
        {options.map(btn => (
          <li key={btn}>
            <Button type="button" name={btn} onClick={onLeaveFeedback}>
              {btn}
            </Button>
          </li>
        ))}
      </WrapBtn>
    </div>
  );
}
