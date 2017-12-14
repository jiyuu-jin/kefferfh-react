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
              <img height="400px" alt="" src="/images/cards/card1.jpg" />
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
        <br />

        <center>

          <h5>Selection 2</h5>
          <span>
                Make me an instrument of thy peace;
                Where there is hatred, let me sow love;<br />
                Where there is injury, pardon.<br />
                Where there is despair, hope;<br />
                Where there is darkness, light;<br />
                And where there is sadness, joy.
          </span>

          <br />
          <br />

          <h5>Selection 3</h5>

          <span>
                          O Divine Master, grant that I<br />
            &nbsp;may not so much seek<br />
            To be consoled...as to console,<br />
            To be understood...as to understand,<br />
            To be loved...as to love, for<br />
            It is in giving...that we receive<br />
            It is in pardoning, that we are pardoned<br />
            It is in dying...that we are born to<br />
            eternal life.<br />

          </span>

          <br />

          <h5>Selection 4</h5>

          <span>
                              Lord, make me an instrument&nbsp;of your peace<br />
            Where there is hatred...let me sow love<br />
            Where there is injury...pardon.<br />
            Where there is doubt...faith.<br />
            Where there is despair...hope.<br />
            Where there is darkness...light.<br />
            Where there is sadness...joy.<br />
            O Divine Master, grant that I may not&nbsp;so much seek<br />
            To be consoled...as to console,<br />
            To be understood...as to understand,<br />
            To be loved...as to love, for<br />
            It is in giving...that we receive<br />
            It is in pardoning, that we are pardoned<br />
            It is in dying...that we are born to&nbsp;eternal life.
              </span>
        </center>


        <br />

      </div>
    );
  },

  componentDidMount() {
    $('.slider').slider();
  },
});


export default Cards;
