import { Component, ReactNode } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  error: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
