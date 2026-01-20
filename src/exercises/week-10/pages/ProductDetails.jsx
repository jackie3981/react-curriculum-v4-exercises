import { Link, useParams } from 'react-router';

export default function ProductDetails() {
  // TODO: Exercise 4 — get `id` from useParams()
  const id = null;

  return (
    <section>
      <h2>Product Details</h2>

      {/* TODO: display the id from the URL */}
      {/* Example: <p>Product id: <code>{id}</code></p> */}

      <Link to="/">Go Home</Link>
    </section>
  );
}
