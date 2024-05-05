export default function Options({ onCount, onReset, visible }) {
  return (
    <div>
      <button onClick={() => onCount('good')}>Good</button>
      <button onClick={() => onCount('neutral')}>Neutral</button>
      <button onClick={() => onCount('bad')}>Bad</button>
      {visible > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
