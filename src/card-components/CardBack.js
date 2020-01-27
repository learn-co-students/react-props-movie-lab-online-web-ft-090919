import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'
import movieData from '../data'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () =>
    { if (this.props.IMDBRating == null) 
      return "No Rating Found"  
      else {
        return <img src={imgMapper[this.props.IMDBRating]}/>
      }
  }

  
  render() {
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <h3 className="genres">{this.props.genres.join(", ")}</h3>
        <h4 className="IMDBRating">
          { this.generateRatingElement()}
          </h4>
        <span />       
        <span />
        <h5 className="genres"></h5>
      </div>
    )
  }
}
