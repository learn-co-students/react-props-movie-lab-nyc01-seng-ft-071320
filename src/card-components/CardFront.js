import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    let url = this.props.backgroundImage

    return (
      <div className="card-front" style={{backgroundImage: `url(${url})`}}/>
    )
  }
}
