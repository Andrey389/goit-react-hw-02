export default function Options({ onCount, onReset }) {
  return (
    <div>
      <button onClick={() => onCount('good')}>Good</button>
      <button onClick={() => onCount('neutral')}>Neutral</button>
      <button onClick={() => onCount('bad')}>Bad</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
