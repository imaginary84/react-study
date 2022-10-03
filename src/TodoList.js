import React from 'react';
import { List, Input } from 'antd';
import './App.css';
import { produce } from 'immer';

// class TodoItem extends React.Component {
//   render() {
//     return <li>{this.props.todo}</li>;
//   }
// }

const TodoItem = ({ todo }) => <li>{todo}</li>;

class TodoList extends React.Component {
  state = {
    todoList: ['파이썬 익히기', '장고 익히기'],
    current: '',
  };

  onChange = (e) => {
    const { value: current } = e.target;
    // console.log(current);
    this.setState({ current });
  };

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const { current, todoList } = this.state;
      if (current.trim().length > 0) {
        // // 1번 방법
        // this.setState({ todoList: [...todoList, current] });
        // 2번방법
        // this.setState({
        //   todoList: produce(todoList, (draft) => {
        //     draft.push(current);
        //   }),
        //   current: '',
        // });

        // 3번방법
        this.setState(
          produce(this.state, (draft) => {
            draft.todoList.push(current);
            draft.current = '';
          }),
        );

        //4번방법
        this.setState((state) => {
          return produce(state, (draft) => {
            draft.todoList.push(current);
            draft.current = '';
          });
        });

        //4-1번방법
        this.setState((state) =>
          produce((draft) => {
            draft.todoList.push(current);
            draft.current = '';
          })(state),
        );

        //5번방법
        this.setState(
          produce((draft) => {
            console.log(draft);
            debugger;
            draft.todoList.push(current);
            draft.current = '';
          }),
        );
      }
    }
  };

  render() {
    return (
      <div>
        <div style={{ width: '500px', margin: '0 auto', marginTop: '100px' }}>
          <List
            header={'Todo List'}
            bordered
            dataSource={this.state.todoList}
            renderItem={(todo) => <List.Item>{todo}</List.Item>}
            style={{ marginBottom: '10px' }}
          ></List>
          <Input
            showCount
            maxLength={20}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            value={this.state.current}
            placeholder="할일은 입력해주세요."
          />
        </div>
        {JSON.stringify(this.state)}
        {/* <ul>
          {this.state.todoList.map((value, index) => (
            // <li key={index}>{value}</li>
            <TodoItem key={index} todo={value}></TodoItem>
          ))}
        </ul>
        <input
          type="text"
          placeholder="할일은 입력해주세요."
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.state.current}
        /> */}
      </div>
    );
  }
}

export default TodoList;
