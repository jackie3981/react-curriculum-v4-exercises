import { Link } from 'react-router-dom';

export default function NotFound() {
  // TODO: Exercise 5 Part B —  get location and pathname
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
