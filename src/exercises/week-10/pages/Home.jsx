export default function Home({ productIds }) {
  return (
    <section>
      <h2>Home</h2>
      <p>
        This route should render at <code>/</code>.
      </p>

      <p>Click a product id to visit a dynamic route:</p>

      <ul>
        {/* TODO: map over the productIds prop (destructured in the Home component's parameters) and render a Link to `/products/${id}` */}
      </ul>
    </section>
  );
}
