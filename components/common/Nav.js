import React from 'react';
import Link from 'next/link';

function Nav() {
	return (
		<nav>
			<li>
				<Link href="/">
					<a id="nav-link-home" href="/">
						<span className="icon ion-md-home mr-1" name="home">
							{' '}
							Home
						</span>
					</a>
				</Link>
			</li>
			<li>
				<Link href="/about" as="/about">
					<a id="nav-link-about" href="/about">
						About
					</a>
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
