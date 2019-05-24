import React from 'react';
import { injectIntl } from 'react-intl';

export default injectIntl(({ intl }) => (
	<h3 style={{ textAlign: 'center' }}>{intl.messages['home.content']}</h3>
));
