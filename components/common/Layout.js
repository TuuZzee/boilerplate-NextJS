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
