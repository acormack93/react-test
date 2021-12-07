import React, { Component } from 'react';
import Brand from './Brand';

class List extends Component {

  // TODO - convert to Tsx to add strict typing
  state = {
    list: []
  }

  componentDidMount() {
    this.setState({list: [
      {id: 'a', name: 'Brand A'},
      {id: 'b', name: 'Brand B'},
      {id: 'c', name: 'Brand C'},
      {id: 'd', name: 'Brand D'},
    ]})
  }

  render() {
    return (
      <div className="List">
         {
          this.state.list.map((el, index) => <Brand key={index} brandName={el.name}/>)
        }
      </div>
    );
  }
}

export default List