import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onAddFeedback }) => {
  return (
    <ul className="feedback-option-list">
      <li>
        <button
          className="feeback-button-type"
          key="good"
          name="good"
          type="button"
          onClick={onAddFeedback}
        >
          good
        </button>
      </li>
      <li>
        <button
          className="feeback-button-type"
          key="neutral"
          name="neutral"
          type="button"
          onClick={onAddFeedback}
        >
          neutral
        </button>
      </li>
      <li>
        <button
          className="feeback-button-type"
          key="bad"
          name="bad"
          type="button"
          onClick={onAddFeedback}
        >
          bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onAddFeedback: PropTypes.func,
};
