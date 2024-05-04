export default function Options({ onCount }) {
  return (
    <div>
      <button onClick={() => onCount('goog')}>Good</button>
      <button onClick={() => onCount('neutral')}>Neutral</button>
      <button onClick={() => onCount('bad')}>Bad</button>
    </div>
  );
}
