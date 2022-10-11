import React from "react";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  options,
  onAddFeedback
}) => {
  return (
    <ul className="feedback">
      {options.map(key => (
        <button
          className="feeback-button-type"
          key={key}
          name={key}
          type="button"
          onClick={onAddFeedback}
        >
          {key}
        </button>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onAddFeedback: PropTypes.func,
};