import React from 'react';

// class Wrapper extends React.Component {
//   render() {
//     return (
//       <section
//         style={{
//           padding: '4em',
//           background: 'papayawhip',
//         }}
//       >
//         {this.props.children}
//       </section>
//     );
//   }
// }

const Wrapper = (props) => (
  <section
    style={{
      padding: '4em',
      background: 'papayawhip',
    }}
  >
    {props.children}
  </section>
);

// class Title extends React.Component {
//   render() {
//     return (
//       <h1
//         style={{
//           fontSize: (this.props.isBig ? 3 : 1.5) + 'em',
//           textAlign: 'center',
//           color: 'palevioletred',
//         }}
//       >
//         {this.props.children}
//       </h1>
//     );
//   }
// }

const Title = (props) => (
  <h1
    style={{
      fontSize: (props.isBig ? 3 : 1.5) + 'em',
      textAlign: 'center',
      color: 'palevioletred',
    }}
  >
    {props.children}
  </h1>
);

function App2() {
  const component = <Title>Hello World</Title>;
  return (
    <div>
      <Wrapper>
        <Title isBig>Hello World</Title>
      </Wrapper>

      <Wrapper children={component}></Wrapper>
    </div>
  );
}

export default App2;
