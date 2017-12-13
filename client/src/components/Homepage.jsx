import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      user: 'Jeff',
      markets: []
    }
    this.getPrices = this.getPrices.bind(this);
  }

  componentDidMount() {
    this.getPrices()
  }

  getPrices() {
    axios.get('/markets')
      .then(markets => this.setState({ markets: markets.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        Welcome to Braarbos, {this.state.user}, lets make some fucking coin
        <div>
        The current price of Bitcoin is 
        {this.state.markets.map(market => {
          return <li>${Math.floor(market.price)} on {market.market}</li>})}
        </div>
      </div>)
  }
}

ReactDOM.render(<Homepage />, document.getElementById('homepage'));