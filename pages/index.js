import axios from 'axios';
import BigNumber from 'bignumber.js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import { addLocaleData, IntlProvider } from 'react-intl';
import flattenMessages from '../utils/i18n';
import locale from '../locale/home';

import Layout from '../components/common/Layout';
import Todo from '../components/Todo';
import MainTitle from '../containers/MainTitle';

addLocaleData([...en, ...ko]);

class Index extends Component {
	static async getInitialProps() {
		const res = await axios.get('https://api.github.com/repos/zeit/next.js');
		const json = await res.data;

		const nextStars = new BigNumber(json.stargazers_count);
		return { stars: nextStars.toString() };
		// return '0';
	}
	// Port in to using useState hooks, if you need state
	render() {
		const { stars } = this.props;
		const currentLanguage = 'ko';

		return (
			<Layout>
				<IntlProvider
					locale={currentLanguage}
					key={currentLanguage}
					messages={flattenMessages(locale[currentLanguage])}
				>
					<div>
						<div name={`next-repo-stars-${stars}`}>
							<MainTitle />
						</div>
						<Todo />
					</div>
				</IntlProvider>
			</Layout>
		);
	}
}

Index.propTypes = {
	stars: PropTypes.string.isRequired
};

export default connect()(Index);
