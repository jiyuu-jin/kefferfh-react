/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import 'materialize-css';


const openModal = () => {
  $('#modal1').modal('open');
};

class Home extends Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#modal1').modal();
    $('.dropdown-content').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false, // Stops event propagation
    });
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
  }
  render() {
    return (
      <div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <iframe className="legacy-search" src="https://www.legacy.com/search?cityId=297134&cityUrl=york&countryId=366899&countryUrl=united-states-of-america&dateRange=Last30Days&firstName=&stateAbbrev=PA&stateId=366890&stateUrl=pennsylvania" />
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="section">

              <div className="row">

                <div className="search-contain">
                  <h5>Search Obituaries</h5>
                  <input onClick={openModal} />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container">
          <div className="section">

            <div className="row">

              <div className="col s12 m4">
                <div className="card z-depth-5">
                  <a className="black-text" href="https://www.google.com/maps/dir//John+W+Keffer+Funeral+Home+Inc,+902+Mt+Rose+Ave,+York,+PA+17403/@39.9609965,-76.7092943,17z/data=!4m15!1m6!3m5!1s0x89c88ec6f9dd0131:0xce3ff1ada7892b06!2sJohn+W+Keffer+Funeral+Home+Inc!8m2!3d39.9609965!4d-76.7071056!4m7!1m0!1m5!1m1!1s0x89c88ec6f9dd0131:0xce3ff1ada7892b06!2m2!1d-76.7071056!2d39.9609965">
                    <div className="card-image">
                      <img alt=" " src="https://static.wixstatic.com/media/09384e_602a537842194aef9352d88498512864.jpg/v1/fill/w_200,h_120,al_c,q_80/09384e_602a537842194aef9352d88498512864.webp" />
                    </div>
                    <h5 className="card-title center">Keffer Funeral Home</h5>
                    <div className="card-content center">
                      <h6>902 Mt. Rose Ave</h6>
                      <p>York, PA 17403</p>
                      <a href="tel:717-854-9211">(717) 854-9211</a>
                      <p>Fax: (717) 846-5229</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="card z-depth-5">
                  <a className="black-text" href="https://www.google.com/maps/dir/''/371+Kings+Mill+Rd,+York,+PA+17401/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c88eaa91b286f7:0xe8c44fa381f4efc6?sa=X&ved=0ahUKEwjao7CZwcTVAhVLMSYKHdUFAOUQwwUIKTAA">
                    <div className="card-image">
                      <img alt=" " src="https://static.wixstatic.com/media/09384e_b9814df22f8f47d9b38e0f1336f647fd.jpg/v1/fill/w_200,h_120,al_c,q_80/09384e_b9814df22f8f47d9b38e0f1336f647fd.webp" />
                    </div>
                    <h5 className="card-title center">Cremation Direct Service of York Crematory</h5>
                    <div className="card-content center">
                      <h6>371 Kings Mill Rd</h6>
                      <p>York, PA  17401</p>
                      <a href="tel:717-845-2399">(717) 845-2399</a>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="card z-depth-5">
                  <a className="black-text" href="https://www.google.com/maps/dir//2114+W+Market+St,+York,+PA+17404/@39.9518766,-76.7752103,17z/data=!4m16!1m7!3m6!1s0x89c88b86be60ea29:0x91b62406d9c1360a!2s2114+W+Market+St,+York,+PA+17404!3b1!8m2!3d39.9518766!4d-76.7730216!4m7!1m0!1m5!1m1!1s0x89c88b86be60ea29:0x91b62406d9c1360a!2m2!1d-76.7730216!2d39.9518766">
                    <div className="card-image">
                      <img alt=" " src="https://static.wixstatic.com/media/09384e_c58db175f4144e82a0ab6fe718666dfa.jpg/v1/fill/w_200,h_120,al_c,q_80/09384e_c58db175f4144e82a0ab6fe718666dfa.webp" />
                    </div>
                    <h5 className="card-title center">Keffer Funeral Home</h5>
                    <div className="card-content center">
                      <h6>2114 W. Market St.</h6>
                      <p>York, PA  17404</p>
                      <a href="tel:717-792-3239">(717) 792-3239</a>
                      <p>Fax: (717) 792-3764</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="card">
                <div className="card-content">
                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s6">
                          <input id="first_name" type="text" className="validate" />
                          <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                          <input id="last_name" type="text" className="validate" />
                          <label htmlFor="last_name">Last Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="email" className="validate" />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax"><img src="/images/background2.jpg" alt="Unsplashed background img 2" /></div>
        </div>


        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m3">
                <div className="icon-block">
                  <h5>Caskets</h5>
                  <img alt=" " src="/images/casket.webp" />
                </div>
              </div>
              <div className="col s12 m3">
                <div className="icon-block">
                  <h5>Burial Containers</h5>
                  <img alt=" " src="/images/burial_container.webp" />
                </div>
              </div>
              <div className="col s12 m3">
                <a className="black-text" href="http://www.pageturnpro.com/Crescent-Memorial/47278-Crescent-Memorial/index.html">
                  <div className="icon-block">
                    <h5>Urns</h5>
                    <img alt=" " height="170px" src="/images/urn.png" />
                  </div>
                </a>
              </div>
              <div className="col s12 m3">
                <a className="black-text" href="http://www.pageturnpro.com/Crescent-Memorial/47278-Crescent-Memorial/index.html">
                  <div className="icon-block">
                    <h5>Prayer Cards</h5>
                    <img alt=" " height="170px" src="/images/prayer_card.webp" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section light-blue darken-4 center">
          <h4 className="white-text">Our Staff</h4>
          <div className="carousel carousel-slider center" data-indicators="true">
            <div className="row center">
              <div className="col s12 m2 fd">
                <img alt=" " height="200px" src="/images/john_keffer.webp" />
              </div>
              <div className="col s12 m2 fd">
                <img alt=" " height="200px" src="/images/joseph_keffer.webp" />
              </div>
              <div className="col s12 m2 fd">
                <img alt=" " height="200px" src="/images/george_curilla.webp" />
              </div>
              <div className="col s12 m2 fd">
                <img alt=" " height="200px" src="/images/robert_ramsey.webp" />
              </div>
              <div className="col s12 m2 fd">
                <img alt=" " height="200px" src="/images/sean_pelkey.webp" />
              </div>
              <div className="col s12 m2 fd">
                <img alt=" " height="200px" src="/images/kevin_sandmeyer.webp" />
              </div>
              <div className="col s12 m2 fd">
                <img alt=" " height="200px" src="/images/john_keffer_2.webp" />
              </div>
            </div>
          </div>
        </div>


        <div className="container center">
          <div className="section">
            <h4 className="black-text">Why choose us?</h4>
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <img alt=" " src="/images/cremation.png" />
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <img alt=" " src="/images/award.png" />
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <img alt=" " src="/images/secure_choice.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
