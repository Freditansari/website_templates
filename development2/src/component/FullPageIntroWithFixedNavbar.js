import React from 'react';
import {  MDBRow,MDBCol, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import {MDBCardUp, MDBAvatar,MDBIcon,MDBCard, MDBCardBody, MDBRotatingCard} from 'mdbreact';


import { BrowserRouter as Router } from 'react-router-dom';
import businessTeamMeeting from './images/business-team-meeting-boardroom.jpg';
import javascriptCode from './images/finger-pointing-at-javascript-code.jpg';
import mernStack from './images/mern-stack-logo.jpg';



class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      flipped1: false,
      flipped2: false,
      flipped3: false
      
    };
    this.onClick = this.onClick.bind(this);
  }

  handleFlipping = id => () => {
    const cardId = `flipped${id}`;
    this.setState({ [cardId]: !this.state[cardId] });
  }
 

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    const colStyle = { maxWidth: "22rem" };
    return (
      <div>
       
        <header>
          <Router>
           
            {/* <MDBNavbar color="indigo" dark expand="md" fixed="top"> */}
            <MDBNavbar color="bg-primary" dark expand="md" fixed="top" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Debis Technology</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Contact Us</MDBNavLink>
                  </MDBNavItem>
            
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            
          </Router>

          <MDBView src={javascriptCode}>
            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
              <MDBContainer>
              <h2>Design, Build, Support Websites, Portals and Applications</h2>
              <h5>We believe that IT infrastructure is a backbone of a modern enterprise companies. 
                But deploying IT to benefit your business is difficult, this is where we comes into your service.  
              </h5>
              <br />
              <p>
              <MDBBtn
                href="https://expense-tracker-debis.herokuapp.com/"
                target="_blank"
                color="primary"
              >
                  Checkout our proof-of-concept
              </MDBBtn>
              </p>

            
              <MDBRow className="mt-5">
                <MDBCol><h2>What We Do</h2><hr/></MDBCol>
              </MDBRow>

        

              <div className="row">
                <div className="col-sm-4"><i className="fas fa-tape fa-3x"></i></div>
                <div className="col-sm-4"><i className="fas fa-building fa-3x"></i></div>
                <div className="col-sm-4"><i className="fas fa-plug fa-3x"></i></div>
              </div>
              <div className="row">
                <div className="col-sm-4">Design and build Web Applications</div>
                <div className="col-sm-4">Maintain and support existing infrastructure</div>
                <div className="col-sm-4">Connect legacy applications to a newer infrastructures</div>
              </div>
              

        
            
              {/* <MDBRow className="mt-2">
                <MDBCol md="4"><i class="fas fa-tape fa-3x"></i></MDBCol>
                <MDBCol md="4"><i class="fas fa-building fa-3x"></i></MDBCol>
                <MDBCol md="4"><i class="fas fa-plug fa-3x"></i></MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="4">Design and build Web Applications</MDBCol>
                <MDBCol md="4">Maintain and support existing infrastructure</MDBCol>
                <MDBCol md="4">Connect legacy applications to a newer infrastructures</MDBCol>
              </MDBRow> */}
              
              </MDBContainer>

            </MDBMask>
          </MDBView>
        </header>
       

        <main>
               <MDBContainer className="text-center my-5">
                    <h2>Our Customers</h2>
               </MDBContainer>
        <MDBContainer>
      
          <MDBRow between>
            <MDBCol style={{ minHeight: '26rem', maxWidth: "22rem" }}>
              <MDBRotatingCard flipped={this.state.flipped1} className="text-center h-100 w-100">
                <MDBCard className="face front">
                  <MDBCardUp>
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                  </MDBCardUp>
                  <MDBAvatar className="mx-auto white" circle>
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                  </MDBAvatar>
                  <MDBCardBody>
                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                    <p className="font-weight-bold blue-text">Web developer</p>
                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlipping(1)}>
                      <MDBIcon icon="redo" /> Click here to rotate
                    </a>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="face back" style={{ height: "400px" }}>
                  <MDBCardBody>
                    <h4 className="font-weight-bold">About me</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                      dolores nihil quae in mollitia asperiores ut rerum
                      repellendus, voluptatum eum, officia laudantium quaerat?
                    </p>
                    <hr />
                    <ul className="list-inline py-2">
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg fb-ic">
                          <MDBIcon fab icon="facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg tw-ic">
                          <MDBIcon fab icon="twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg gplus-ic">
                          <MDBIcon fab icon="google-plus" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg li-ic">
                          <MDBIcon fab icon="linkedin" />
                        </a>
                      </li>
                    </ul>
                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlipping(1)}>
                      <MDBIcon icon="undo" /> Click here to rotate back
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBRotatingCard>
            </MDBCol>
           

            <MDBCol style={{ minHeight: '26rem', maxWidth: "22rem" }}>
              <MDBRotatingCard flipped={this.state.flipped2} className="text-center h-100 w-100">
                <MDBCard className="face front">
                  <MDBCardUp>
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                  </MDBCardUp>
                  <MDBAvatar className="mx-auto white" circle>
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                  </MDBAvatar>
                  <MDBCardBody>
                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                    <p className="font-weight-bold blue-text">Web developer</p>
                    <a href="#!" className="rotate-btn text-dark" data-card="card-2" onClick={this.handleFlipping(2)}>
                      <MDBIcon icon="redo" /> Click here to rotate
                    </a>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="face back" style={{ height: "400px" }}>
                  <MDBCardBody>
                    <h4 className="font-weight-bold">About me</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                      dolores nihil quae in mollitia asperiores ut rerum
                      repellendus, voluptatum eum, officia laudantium quaerat?
                    </p>
                    <hr />
                    <ul className="list-inline py-2">
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg fb-ic">
                          <MDBIcon fab icon="facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg tw-ic">
                          <MDBIcon fab icon="twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg gplus-ic">
                          <MDBIcon fab icon="google-plus" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg li-ic">
                          <MDBIcon fab icon="linkedin" />
                        </a>
                      </li>
                    </ul>
                    <a href="#!" className="rotate-btn text-dark" data-card="card-2" onClick={this.handleFlipping(2)}>
                      <MDBIcon icon="undo" /> Click here to rotate back
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBRotatingCard>
            </MDBCol>

            <MDBCol style={{ minHeight: '26rem', maxWidth: "22rem" }}>
              <MDBRotatingCard flipped={this.state.flipped3} className="text-center h-100 w-100">
                <MDBCard className="face front">
                  <MDBCardUp>
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                  </MDBCardUp>
                  <MDBAvatar className="mx-auto white" circle>
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                  </MDBAvatar>
                  <MDBCardBody>
                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                    <p className="font-weight-bold blue-text">Web developer</p>
                    <a href="#!" className="rotate-btn text-dark" data-card="card-3" onClick={this.handleFlipping(3)}>
                      <MDBIcon icon="redo" /> Click here to rotate
                    </a>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="face back" style={{ height: "400px" }}>
                  <MDBCardBody>
                    <h4 className="font-weight-bold">About me</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                      dolores nihil quae in mollitia asperiores ut rerum
                      repellendus, voluptatum eum, officia laudantium quaerat?
                    </p>
                    <hr />
                    <ul className="list-inline py-2">
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg fb-ic">
                          <MDBIcon fab icon="facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg tw-ic">
                          <MDBIcon fab icon="twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg gplus-ic">
                          <MDBIcon fab icon="google-plus" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg li-ic">
                          <MDBIcon fab icon="linkedin" />
                        </a>
                      </li>
                    </ul>
                    <a href="#!" className="rotate-btn text-dark" data-card="card-3" onClick={this.handleFlipping(3)}>
                      <MDBIcon icon="undo" /> Click here to rotate back
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBRotatingCard>
            </MDBCol>


          </MDBRow>

       
        </MDBContainer>

          <MDBView src={businessTeamMeeting}>
            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
              <MDBContainer>
              <h2>We Supports</h2>

              <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4"><img src={mernStack} className="img-fluid" alt="" /> </div>
                <div class="col-sm-4"></div>
              </div>
              
                 
              
              <br />
              <p></p>
              </MDBContainer>

            </MDBMask>
          </MDBView>
        </main>
      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;