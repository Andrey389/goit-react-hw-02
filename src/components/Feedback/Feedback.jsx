export default function Feedback({
  values: { good, neutral, bad },
  isVisible,
}) {
  return isVisible > 0 ? (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  ) : (
    ' '
  );
}
