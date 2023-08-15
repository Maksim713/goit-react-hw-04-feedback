import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

const initOptions = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [options, setOptions] = useState(initOptions);
  const { good, neutral, bad } = options;
  const totalFeedBack = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / totalFeedBack) * 100);
  };

  const onLeaveFeedback = feedbackType => {
    setOptions(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {!totalFeedBack ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedBack}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
