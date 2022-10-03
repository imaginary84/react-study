import React, { useCallback, useEffect, useState } from 'react';

class App1 extends React.Component {
  state = {
    value1: 0,
    value2: 0,
  };

  onClick = () => {
    this.setState((prevState) => ({ value1: prevState + 1 }));
  };

  render() {
    const { value1 } = this.state;
    return (
      <div>
        Hello App1
        <hr></hr>
        {value1}
        <button onClick={this.onClick}></button>
      </div>
    );
  }
}

function PostDetailComponent({ post: { title, content } }) {
  return (
    <div>
      <h1>{title}</h1>
      {content}
    </div>
  );
}

function PostDetail({ postId }) {
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    // console.log('mounted postId : ', postId);
  }, []);

  useEffect(() => {
    // console.log('changed postId : ', postId);
    setPost({ title: '포스팅 제목', content: `포스팅 내용...${postId}` });
    // setInterval(() => {}, 1000);
    return () => {
      //unmount
      //clearIntervalu();
    };
  }, [postId]);

  return (
    <div>
      <h1>Post #{postId}</h1>
      {!post && '로딩중'}
      {post && <PostDetailComponent post={post} />}
    </div>
  );
}

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>현재시간은 {date.toISOString().slice(11, 19)}입니다.</div>;
}

function App2() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value, setValue] = useState({ value1: 0, value2: 0 });
  const [postId, setPostId] = useState(1);

  useEffect(() => {
    // console.log('mount, logic#1');
  }); //render시에 호출
  useEffect(() => {
    // console.log('mount, logic#2');
  }, []); //마운트시에 호출
  useEffect(() => {
    // console.log('change value', value);
  }, [value]); //value가 변경될 시에 호출

  const onClick = useCallback(() => {
    // 온클릭 함수를 랜더링할때마다 새로 생성하는것이 아니라. useCallback을 사용하여 마운트시에 한번 만들어놓고 사용함.
    // 다시 랜더링할때는 만들어진것을 사용함.
    setValue((prevState) => ({ ...prevState, value1: 10 }));
  }, []);

  return (
    <div>
      Hello App2
      <hr />
      {JSON.stringify(value)}
      <hr />
      <button onClick={onClick}>+1</button>
      <hr />
      <button
        onClick={() => {
          setPostId(100);
        }}
      >
        100번 글 보기
      </button>
      <PostDetail postId={postId}></PostDetail>
      <Clock />
    </div>
  );
}

export default App2;
