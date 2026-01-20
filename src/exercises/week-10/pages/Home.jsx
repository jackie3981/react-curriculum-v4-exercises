import { Link } from 'react-router';

export default function Home({ productIds }) {
  return (
    <section>
      <h2>Home</h2>
      <p>
        This route should render at <code>/</code>.
      </p>

      <p>Click a product id to visit a dynamic route:</p>

      <ul>
        {/* TODO: map over productIds and render a Link to `/products/${id}` */}
      </ul>
    </section>
  );
}
