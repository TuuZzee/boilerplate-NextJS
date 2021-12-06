// https://reactjs.org/docs/error-boundaries.html
import React from 'react';

import { ErrorLevels } from 'src/utils/constants';

type Props = {
  errorLevel: ErrorLevels;
  children: React.ReactNode;
};
type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
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

export default ErrorBoundary;
