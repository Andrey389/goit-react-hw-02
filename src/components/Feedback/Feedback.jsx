export default function Feedback({
  values: { good, neutral, bad },
  sum,
  interest,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {sum}</p>
      <p>Positive: {interest}%</p>
    </div>
  );
}
