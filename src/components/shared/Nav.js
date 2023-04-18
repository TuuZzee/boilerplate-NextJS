import React from 'react';

import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <li>
        <Link href="/" id="nav-link-home" passHref>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" id="nav-link-about" passHref>
          About
        </Link>
      </li>
      <style>{`
        nav {
          display: flex;
          margin: 10px;
        }
        li {
          list-style: none;
          margin-right: 1rem;
        }
      `}</style>
    </nav>
  );
}

export default Nav;
