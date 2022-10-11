import React from "react";
import { FeedbackOptions } from './feedbackOptions';
import { Statistic } from './statistic';
import { Section } from './section';
import './feedback-styles.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleAddFeedback = event => {
    const key = event.target.name;
    this.setState(prevState => {
        return { [key]: prevState[key] + 1 };
    });
    };

    countTotalFeedback() {
      const {
        good,
        neutral,
        bad
      } = this.state;
    return good + neutral + bad;
    };

    countPositiveFeedbackPercentage() {
      const {
        good,
        neutral,
        bad
      } = this.state;
    const total = good + neutral + bad;
    if (!total) {
        return 0;
        };
    return Math.round((good / total) * 100);
    };

    render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad,} = this.state;  
    return (
      <div className="feedback">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onAddFeedback={this.handleAddFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback
