export default function Options({ onCount }) {
  return (
    <div>
      <button onClick={onCount}>Good</button>
      <button onClick={onCount}>Neutral</button>
      <button onClick={onCount}>Bad</button>
    </div>
  );
}
