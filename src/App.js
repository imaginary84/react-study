import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Counter from 'Counter';
import ProfileStyle from './Profile.module.css';
import MessageStyle from './Message.module.css';
import Style from './Style.module.css';

const Profile = (props) => (
  <div className={[ProfileStyle.wrapper, Style.style].join(' ')}>Profile</div>
);
const Message = (props) => (
  <div className={[MessageStyle.wrapper, Style.style].join(' ')}>Message</div>
);

class App extends React.Component {
  Change = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {/* // TODO: 테스트 */}
        <Counter />
        <Counter color="green" />
        <Counter color="blue" />
        Hello World
        <Profile />
        <Message />
        <input name={'lastName'} onChange={this.Change} />
        <input name={'firstName'} onChange={this.Change} />
        {JSON.stringify(this.state)}
      </div>
    );
  }
}
export default App;
