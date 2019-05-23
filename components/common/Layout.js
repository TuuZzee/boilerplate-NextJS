import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Nav from './Nav';

const Layout = ({ title, children }) => (
	<div>
		<Head>
			<title>{title}</title>
		</Head>

		<header>
			<Nav />
		</header>

		{children}

		<div>
			{process.env.ENV !== 'production' ? (
				<aside
					className="alert alert-danger"
					style={{
						position: 'fixed',
						left: '10px',
						bottom: '10px'
					}}
				>
					{process.env.ENV}
				</aside>
			) : null}
		</div>
	</div>
);

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

Layout.defaultProps = {
	title: 'Boilerplate App',
	children: null
};

export default Layout;
