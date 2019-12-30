/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';


class Prices extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <h5 className="blue-grey-text">York Area Florists</h5>
        <div className="row">
          <div className="col l6 s12">
            <h6>Lincolnway Flower Shop & Greenhouses</h6>
                        3601 East Market St.
                        York, PA 17402
                        (717) 755-4961|
                        www.lincolnwayflowershop.com
                    </div>
          <div className="col l6 s12">
            <h6>Stagemyer Flower Shop</h6>
                        537-543 N George St
                        York, PA 17404
                        717-854-8461
                        www.stagemyerflowers.com
                    </div>
        </div>
        <div className="row">
          <div className="col l6 s12">
            <h6>Chas. A. Schaefer Flowers</h6>
                        124 W. Market St.
                        York, PA 17401
                        (717) 845-1571
                        www.schaeferflowers.com
                    </div>
          <div className="col l6 s12">
            <h6>Chas. A. Schaefer Flowers</h6>
                        715 Carlisle Ave.
                        York, PA 17404
                        (717) 848-4935
                        www.schaeferflowers.com
                    </div>
        </div>

        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Prices;
