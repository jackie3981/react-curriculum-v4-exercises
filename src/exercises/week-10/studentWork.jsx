import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

/**
 * Exercise 1 (3–5 sentences):
 * Why is React Router useful in an SPA?
 *
 * ANSWER:
 */

export default function StudentWork() {
  const [user, setUser] = useState({
    isLoggedIn: true,
    firstName: 'Avery',
  });

  function toggleLogin() {
    setUser((u) => ({ ...u, isLoggedIn: !u.isLoggedIn }));
  }

  return (
    <div
      style={{
        fontFamily: 'system-ui, Arial',
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      <Header user={user} />

      <main style={{ padding: 12 }}>
        {/* TODO: Exercise 2 — Add <Routes> with all required routes.
            Remember: protect /account by only defining that route when logged in.
            Also, when you render <Account>, be sure to pass the user prop (e.g. <Account user={user} />).
        */}
      </main>

      <Footer />

      <aside
        style={{
          padding: 12,
          marginTop: 8,
          background: '#fafafa',
          border: '1px solid #eee',
        }}
      >
        <h3 style={{ marginTop: 0 }}>Debug Panel</h3>
        <p>
          Toggle login to test protected routing behavior. When logged out,
          typing <code>/account</code> should NOT show Account.
        </p>
        <button onClick={toggleLogin}>Toggle Logged In</button>
      </aside>
    </div>
  );
}
