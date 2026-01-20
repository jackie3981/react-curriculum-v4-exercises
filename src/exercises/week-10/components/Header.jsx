import { Link, NavLink } from 'react-router-dom';

export default function Header({ user }) {
  return (
    <header style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
      <h1 style={{ margin: 0 }}>Week 10 Routing Demo</h1>

      <nav style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        {/* TODO: Link to "/" */}
        {/* TODO: Link to "/checkout" */}

        {/* TODO: If user.isLoggedIn, show NavLink to "/account"
            Make active state obvious (underline/bold/etc)
        */}

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/History_API"
          target="_blank"
          rel="noreferrer"
        >
          History API (MDN)
        </a>
      </nav>

      <div style={{ marginTop: 8 }}>
        {user.isLoggedIn ? (
          <span>
            Logged in as <strong>{user.firstName}</strong>
          </span>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </header>
  );
}
