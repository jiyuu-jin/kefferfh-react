/* eslint-disable max-len */
import React from 'react';

const Funeral = () => ({
  render() {
    return (
      <div className="container">
        <h4 className="blue-text">Complete Funeral Service Packages</h4>
        <h6> Our Service including:</h6>
        <ul className="disc-list">
          <li>Transfer from local place of death</li>
          <li>Professional Service</li>
          <li>Supervision of service and necessary office work</li>
          <li>Register book, memorial folders or prayer cards, acknowledgement cards</li>
          <li>Use of funeral home, equipment and service of assistants</li>
          <li>Scheduled one-hour viewing period</li>
        </ul>

        <p className="bold">Total of above package (Does not include a casket selection): $4,515.00</p>

        <h6 className="blue-text">Selection One</h6>
          Above package with a Bradford 20 ga. Steel non-sealing casket ($760.00): $5,275.00

          <h6 className="blue-text">Selection Two</h6>
          Above package with a Atlantic 20 ga. Steel sealing casket ($1,535.00): $6,050.00

          <h6 className="blue-text">Selection Three</h6>
          Above package with a Pearl Rose 18 ga. Steel sealing casket ($1,740.00): $6,255.00

          <h6 className="blue-text">Selection Four</h6>
          Above package with a Livingston solid oak wood casket ($2,173.00): $6,688.00

          <h6 className="blue-text">Selection Five</h6>
          Above package with a Provincial Solid Poplar Wood casket ($2,683.00): $7,198.00

          <h6 className="blue-text center">**** Concrete Vaults starting at $799.00 not included in the above prices. ****</h6>

        <p>Please note that the above casket and vault selections are average choices.  Many other styles are available at higher or lower prices.</p>

        <h6 className="blue-text">Additional charges for the following services:</h6>
        <ul className="disc-list">
          <li>Any cemetery burial charges (Ranging from $450 to $1,970 locally).</li>
          <li>Honorarium for clergy ($150-$175 typically).</li>
          <li>Certified copies of the death certificate ($6.00 each).</li>
          <li>Family car or a limousine (at cost).</li>
          <li>Evening viewing add $150.00 to above prices.</li>
          <li>Flowers</li>
          <li>Newspapers at cost</li>
        </ul>
      </div>
    );
  },
});


export default Funeral;

