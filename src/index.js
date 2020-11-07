import React from 'react';
import ReactDOM from 'react-dom'; 

class Sample extends React.Component {
  render() {
    return <p>I am learning React. My life is getting better.</p>;
  }
}

ReactDOM.render(<Sample />, document.getElementById('root'));