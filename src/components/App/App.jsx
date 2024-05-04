import { useState } from 'react';

import Description from '../Description/Description';

import Feedback from '../Feedback/Feedback';

import Options from '../Options/Options';

import Notification from '../Notification/Notification';

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  const handleReset = () => {
    setValues([0]);
  };
  console.log(handleReset);

  const totalFeedback = values.good + values.neutral + values.bad;

  return (
    <>
      <Description />
      <Options onCount={updateFeedback} onReset={handleReset} />
      <Feedback values={values} isVisible={totalFeedback} />
      <Notification isVisible={totalFeedback} />
    </>
  );
}
