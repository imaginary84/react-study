import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static defaultProps = {
    color: 'red',
  };

  static propTypes = {
    color: PropTypes.string,
  };

  state = {
    value: 0,
    color: this.props.color,
  };

  onClick = (e) => {
    this.setState(({ value: prevValue }) => ({ value: prevValue + 1 }));
  };

  onContextMenu = (e) => {
    e.preventDefault();
    this.setState(({ value: prevValue }) => ({
      value: prevValue > 0 ? prevValue - 1 : 0,
    }));
  };

  render() {
    const { color, value } = this.state;
    return (
      <div
        onClick={this.onClick}
        onContextMenu={this.onContextMenu}
        style={{ ...style, backgroundColor: color }}
      >
        {value}
      </div>
    );
  }
}

const style = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: '100px',
  fontSize: '3rem',
  margin: '1rem',
  userSelect: 'none',
};

export default Counter;
