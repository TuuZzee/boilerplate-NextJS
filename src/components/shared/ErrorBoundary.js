// https://reactjs.org/docs/error-boundaries.html
import React from 'react';
import PropTypes from 'prop-types';

import constants from 'src/utils/constants';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {
    const { errorLevel } = this.props;

    console.error('ErrorBoundary - error level: ', errorLevel);
    // componentDidCatch(error, errorInfo) {[...]}
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // [ToDo]: change for custom ServerError Component
      return children;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
  errorLevel: PropTypes.oneOf([constants.ERRORS_LEVELS.application, constants.ERRORS_LEVELS.layout])
    .isRequired,
};

ErrorBoundary.defaultProps = {
  children: null,
};

export default ErrorBoundary;
