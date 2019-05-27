import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import Styles from '../../css/index.scss';

import Nav from './Nav';

const Layout = ({ title, children }) => (
	<div>
		<Head>
			<title>{title}</title>
			{/* eslint-disable-next-line react/no-danger */}
			<style dangerouslySetInnerHTML={{ __html: Styles }} />
		</Head>

		<header>
			<Nav />
		</header>

		{children}

		{process.env.ENV !== 'production' ? (
			<React.Fragment>
				<Alert color="danger">{process.env.ENV}</Alert>
				<style>{`
					.alert.alert-danger {
						position: fixed;
						left: 10px;
						bottom: 10px;
					}
				`}</style>
			</React.Fragment>
		) : null}
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
