import axios from 'axios';
import BigNumber from 'bignumber.js';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Layout from '../components/common/Layout';
import Todo from '../components/Todo';

// Port in to using useState hooks, if you need state
const Index = ({ stars }) => (
	<Layout>
		<div name={`next-repo-stars-${stars}`}>
			<h3 style={{ textAlign: 'center' }}>Welcome to the Home page</h3>
		</div>
		<Todo />
	</Layout>
);

Index.propTypes = {
	stars: PropTypes.string.isRequired
};

Index.getInitialProps = async () => {
	// Adding a default/initialState can be done as follows:

	const res = await axios.get('https://api.github.com/repos/zeit/next.js');
	const json = await res.data;

	const nextStars = new BigNumber(json.stargazers_count);
	return { stars: nextStars.toString() };
};

export default connect()(Index);
