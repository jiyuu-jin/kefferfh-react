/* eslint-disable max-len */
import React from 'react';

const Cards = () => ({
  render() {
    return (
      <div className="container">
        <h4 className="blue-text">Prayer Cards</h4>

        <br />

        <div className="slider">
          <ul className="slides">
            <li>
              <img alt="" src="https://lorempixel.com/580/250/nature/1" />
            </li>
            <li>
              <img alt="" src="https://lorempixel.com/580/250/nature/2" />
            </li>
            <li>
              <img alt="" src="https://lorempixel.com/580/250/nature/3" />
            </li>
            <li>
              <img alt="" src="https://lorempixel.com/580/250/nature/4" />
            </li>
          </ul>
        </div>

        <br />

      </div>
    );
  },

  componentDidMount() {
      $('.slider').slider();
  },
});


export default Cards;
