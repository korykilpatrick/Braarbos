import React from 'react';
import ReactDOM from 'react-dom';


class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      user: 'Jeff'
    }
  }

  render() {
    return (
      <div>
        {this.state.user}
      </div>)
  }
}

ReactDOM.render(<Homepage />, document.getElementById('homepage'));