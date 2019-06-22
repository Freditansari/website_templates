import React from 'react';
import {  MDBRow,MDBCol, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import {MDBCardUp, MDBAvatar,MDBIcon,MDBCard, MDBCardBody, MDBRotatingCard} from 'mdbreact';
import {MDBAnimation} from 'mdbreact';
import {MDBCardText, MDBCarouselItem, MDBCardImage, MDBCardTitle, MDBCarousel, MDBCarouselInner} from 'mdbreact';


import { BrowserRouter as Router } from 'react-router-dom';
import businessTeamMeeting from './images/business-team-meeting-boardroom.jpg';
import javascriptCode from './images/finger-pointing-at-javascript-code.jpg';
import mernStack from './images/mern-stack-logo.jpg';
import WOW from "wow.js";




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

  componentDidMount() {
    const wow = new WOW();
    wow.init();
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
              <div className="wow fadeIn">
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
              

        

              {/* <div className="row">
                <div className="col-sm-4"><i className="fas fa-tape fa-3x"></i></div>
                <div className="col-sm-4"><i className="fas fa-building fa-3x"></i></div>
                <div className="col-sm-4"><i className="fas fa-plug fa-3x"></i></div>
              </div>
              <div className="row">
                <div className="col-sm-4">Design and build Web Applications</div>
                <div className="col-sm-4">Maintain and support existing infrastructure</div>
                <div className="col-sm-4">Connect legacy applications to a newer infrastructures</div>
              </div>
               */}

        
               
              <MDBRow className="mt-2">
                <MDBCol md="4"><i class="fas fa-tape fa-3x"></i></MDBCol>
                <MDBCol md="4"><i class="fas fa-building fa-3x"></i></MDBCol>
                <MDBCol md="4"><i class="fas fa-plug fa-3x"></i></MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="4">Design and build Web Applications</MDBCol>
                <MDBCol md="4">Maintain and support existing infrastructure</MDBCol>
                <MDBCol md="4">Connect legacy applications to a newer infrastructures</MDBCol>
              </MDBRow>
              
               </MDBContainer>
               </div>

            </MDBMask>
          </MDBView>
        </header>
       

        <main>
         
               <MDBContainer className="text-center my-5">
                    <h2>Our Customers</h2>
               </MDBContainer>

        
               <MDBContainer>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
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