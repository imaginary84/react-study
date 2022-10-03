import React from 'react';
import ErrorBoundary from 'ErrorBoundary';

class Message extends React.Component {
  render() {
    // const { error } = this.props;
    throw new Error('의도한 오류발생');
    // if (error)
    // else
    return <div>Message</div>;
  }
}

class App3 extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Message />
      </ErrorBoundary>
    );
  }
}

export default App3;
