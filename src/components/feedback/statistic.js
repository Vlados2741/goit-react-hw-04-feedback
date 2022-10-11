import React from "react";
import PropTypes from 'prop-types';


export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) => {
  
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p className="none-feedback">There is no feedback</p>;
  }
  
  return (
    <ul className="stats">
      <li className="stats-item">
        <p>
          Good : <span>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral : <span>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad : <span>{bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total : <span>{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback : <span>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};