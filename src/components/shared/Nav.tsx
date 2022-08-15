import React from 'react';
import Link from 'next/link';
import { Navbar, NavItem } from 'reactstrap';

function Nav() {
  return (
    <Navbar>
      <NavItem>
        <Link href="/" passHref>
          Home
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/about" passHref>
          About
        </Link>
      </NavItem>
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
    </Navbar>
  );
}

export default Nav;
