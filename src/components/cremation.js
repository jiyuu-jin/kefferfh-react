/* eslint-disable max-len */
import React from 'react';

const Cremation = () => ({
  render() {
    return (
      <div className="container">
        <h4 className="blue-text">Cremation Service Prices</h4>

        <br />

        <h5 className="blue-text">Selection One</h5>
        <span className="bold">Cremation Following Public Viewing and Funeral Service:</span><p>Full professional service.  Care of the body, availability on 24 hour basis.  Removal from place of death (local), viewing prior to service, register book, memorial folders or prayer cards, acknowledgment folders, office work, transportation to crematory and crematory charge, use of Funeral Home and equipment and services of assistants, including use of rental casket for service and cremation container.</p>


        <div className="push-right">
          <h6>Funeral Home Service*</h6>
          <span className="bold">$4,995.00</span>

          <h6>Church Service*</h6>
          <span className="bold">$5,025.00</span>

          <h6>Without use of rental casket, or without casket provided by funeral home, deduct:</h6>
          <span className="bold">$800.00</span>

          <h6>Other caskets suitable for viewing from:</h6>
          <span className="bold">$395.00</span>
        </div>

        <p>Cremation does not preclude family viewing or choice of cremation casket.   The following Services (2,3,4) can include a 1/2 hour private family viewing at the funeral home, including care of the body, a flannel covered casket for viewing and cremation, suitable for average height and weight, additional charge - <span className="bold">$1,190.00</span></p>

        <h5 className="blue-text">Selection Two</h5>

        <p>Direct Cremation with Memorial Service:
              Staff for memorial service, register book, memorial folders, acknowledgement cards, office work, cremation casket and crematory charge, use of funeral home and equipment and service of assistants, service vans to cemetery. (Includes a plastic utility urn.) - <span className="bold">$3,080.00</span></p>

          Service at Funeral Home or Church *¹
          (1 hour visitation)

          <br />

        <h5 className="blue-text">Selection Three</h5>
        <p>Direct Cremation with Memorial Service (One Funeral Director):
              As above with limited family requirements for funeral home staff and no cemetery procession.  Service other than funeral home (No flower or service car). Funeral Director for all arrangements at memorial site. (Includes a plastic utility urn.)
              - <span className="bold">$2,580.00</span></p>

        <h5 className="blue-text">Selection Four</h5>
        <p> Direct Cremation with Graveside Service/Assisted Family Arranged Memorial Service:
          Service at local cemetery (No registry book or memorial cards).  Funeral Director (prior to memorial service) to assist with transfer and arrangements of urn setting, flowers, register book, pictures, etc., at memorial service site. (Includes a plastic utility urn.)
             - <span className="bold">$1,840.00</span></p>

        <p>*Without registry book, acknowledgement cards, memorial folders, deduct:
              <span className="bold"> $90.00</span></p>

        <p>¹Includes minimum charge for Cremation Container
               <span className="bold"> $85 / Caskets - $415.00 & up</span>
        </p>

        <h5 className="blue-text">Direct Cremation</h5>

          <p>Includes removal, office work, placing obituary, transportation expense, plastic utility urn, cremation container and crematory charge Family to Compose Obituary.
              (Must be paid at or prior to time of need).
               <span className="bold"> $965.00</span></p>

        <h5 className="blue-text">Additional charges for the following services:</h5>
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


export default Cremation;
