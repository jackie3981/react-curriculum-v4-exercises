import { Link, useLocation } from 'react-router';

export default function NotFound() {
  // TODO: Exercise 5 — useLocation() and get pathname
  const pathname = '';

  return (
    <section>
      <h2>404: Not Found</h2>

      {/* TODO: show the invalid path */}
      {/* Example: <p>You tried: <code>{pathname}</code></p> */}

      <Link to="/">Go Home</Link>
    </section>
  );
}
