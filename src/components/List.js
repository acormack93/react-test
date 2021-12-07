import React, { Component } from 'react';
import Brand from './Brand';

class List extends Component {

  // TODO - convert to Tsx to add strict typing
  state = {
    list: []
  }

  componentDidMount() {
    fetch('http://localhost:3004/brands')
    .then((response) => response.json())
    .then(list => {
      this.setState({list: list})
    });
  }

  render() {
    return (
      <div className="List">
         {
          this.state.list.map((el, index) => <Brand key={index} brandName={el.brandName} location={el.location}/>)
        }
      </div>
    );
  }
}

export default List