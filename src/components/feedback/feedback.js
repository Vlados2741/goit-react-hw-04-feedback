import { useState } from 'react';
import { FeedbackOptions } from './feedbackOptions';
import { Statistic } from './statistic';
import { Section } from './section';
import './feedback-styles.css';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleAddFeedback = event => {
    const key = event.target.name;
    switch (key) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  return (
    <div className="feedback">
      <Section title="Please leave feedback">
        <FeedbackOptions
          onAddFeedback={handleAddFeedback}
          options={{
            good: good,
            neutral: neutral,
            bad: bad,
          }}
        />
      </Section>
      <Section title="Statistics">
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default Feedback;
