import { useNavigate } from 'react-router';

export default function Checkout() {
  // TODO: Exercise 5 — create navigate using useNavigate()
  const navigate = null;

  function handleGoHome() {
    // TODO: navigate('/')
  }

  function handleBack() {
    // TODO: navigate(-1)
  }

  return (
    <section>
      <h2>Checkout</h2>
      <p>This page exists to practice useNavigate().</p>

      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={handleGoHome}>Go Home (navigate)</button>
        <button onClick={handleBack}>Back (navigate -1)</button>
      </div>
    </section>
  );
}
