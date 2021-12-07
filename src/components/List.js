import React, { Component } from 'react';
import Brand from './Brand';
import {clientId, clientSecret, clientURL} from '../secrets'
import './List.css'
class List extends Component {

  // TODO - convert to Tsx to add strict typing
  state = {
    brands: [],
    stores: []
  }

  componentDidMount() {
    // TODO split into more testable method, in own file
    const authBody =  {
      "grant_type": "client_credentials",
      "client_id": clientId,
      "client_secret": clientSecret
  }
    fetch(clientURL + "/oauth/token", {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(authBody)
    })
    .then((response) => response.json())
    .then(token => {
      fetch(clientURL + "/api/v2/brands?id[]=a9ebeb9a-8d0b-41f6-9123-cf12dc1c8fae&id[]=a5b5876e-ad65-4260-8c3d-64fe6cb57bb3&id[]=9fd7ed19-1dbf-11ea-b97e-02c6bf374af0&id[]=700557f9-b39a-415c-ac8b-be66e825ef8d&embed[]=stores", {
        headers: new Headers({
          'Authorization': 'Bearer ' + token.access_token
        })
      })
      .then((response) => response.json())
      .then(response => {
        this.setState({brands: response.data, stores: response.embedded.stores})
      })
    });
    
  }

  render() {
    return (
      <div className="List">
         {
          this.state.brands.map((el, index) => <Brand 
            key={el.id}
            brandName={el.name}
            brandStores={
              this.state.stores.filter(s => el.stores.includes(s.id)) // couldn't find docs on querying endpoint for stores with a filter, hence use of embed in the main query. Ideally query the store endpoint on expanding the card.
            }
            website={el.website}
          />)
        }
      </div>
    );
  }
}

export default List