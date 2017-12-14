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
              <img alt="" src="/images/cards/card1.jpg" />
            </li>
            <li>
              <img alt="" src="/images/cards/card2.jpg" />
            </li>
            <li>
              <img alt="" src="/images/cards/card3.png" />
            </li>
            <li>
              <img alt="" src="/images/cards/card4.png" />
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
