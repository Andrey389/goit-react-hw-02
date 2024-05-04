export default function Notification({ isVisible }) {
  return isVisible === 0 ? 'No feedback yet!' : ' ';
}
