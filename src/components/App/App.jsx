import { useState } from 'react';

import Description from '../Description/Description';

import Feedback from '../Feedback/Feedback';

import Options from '../Options/Options';

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };
  return (
    <>
      <Description />
      <Options onCount={updateFeedback} />
      <Feedback value={values} />
    </>
  );
}
