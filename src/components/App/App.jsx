import { useState, useEffect } from 'react';

import Description from '../Description/Description';

import Feedback from '../Feedback/Feedback';

import Options from '../Options/Options';

import Notification from '../Notification/Notification';

const getRendervalue = () => {
  const saveValue = localStorage.getItem('render-value');
  if (saveValue !== null) {
    return JSON.parse(saveValue);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export default function App() {
  const [values, setValues] = useState(getRendervalue);

  useEffect(() => {
    localStorage.setItem('render-value', JSON.stringify(values));
  }, [values]);

  const updateFeedback = feedbackType => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  const handleReset = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onCount={updateFeedback}
        onReset={handleReset}
        visible={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={values}
          interest={positiveFeedback}
          sum={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
