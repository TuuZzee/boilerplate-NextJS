import axios from 'axios';
import BigNumber from 'bignumber.js'; // ToDo: remove after complete setup
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo';

// Port in to using useState hooks, if you need state
const Index = ({ stars }) => (
	<div name={`next-repo-stars-${stars}`}>
		<Todo />
	</div>
);

Index.propTypes = {
	stars: PropTypes.string.isRequired
};

Index.getInitialProps = async ({ store }) => {
	// Adding a default/initialState can be done as follows:
	store.dispatch({ type: 'ADD_TODO', text: 'It works!' });

	const res = await axios.get('https://api.github.com/repos/zeit/next.js');
	const json = await res.data;

	const nextStars = new BigNumber(json.stargazers_count);
	return { stars: nextStars };
};

export default connect()(Index);
