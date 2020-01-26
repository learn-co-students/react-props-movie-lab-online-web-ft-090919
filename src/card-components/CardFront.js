import React, { Component } from 'react';
import movieData from '../data'

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${prop})`}}>
        <img src={this.props.poster} alt={this.props.poster} />
      </div>
    )
  }
}
