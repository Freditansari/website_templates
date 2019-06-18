import React from 'react';
import { MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import businessTeamMeeting from './images/business-team-meeting-boardroom.jpg';
import javascriptCode from './images/finger-pointing-at-javascript-code.jpg';
import mernStack from './images/mern-stack-logo.jpg';



class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
       
        <header>
          <Router>
           
            {/* <MDBNavbar color="indigo" dark expand="md" fixed="top"> */}
            <MDBNavbar color="bg-primary" dark expand="md" fixed="top" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Navbar</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            
          </Router>

          <MDBView src={javascriptCode}>
            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
              <MDBContainer>
              <h2>Design, Build, Support Websites, Portals and Applications</h2>
              <h5>Here in debis technology, we believe that IT infrastructure is a backbone of a modern enterprise companies. 
                But deploying IT to benefit your business is difficult, this is where we comes into your service.  
              </h5>
              <br />
              <p>
              <MDBBtn
                href="https://expense-tracker-debis.herokuapp.com/"
                target="_blank"
                color="primary"
              >
                  Checkout our Portfolio
              </MDBBtn>
              </p>
              </MDBContainer>

            </MDBMask>
          </MDBView>
        </header>
       

        <main>
          <MDBContainer className="text-center my-5">
            <h2>Customers</h2>

            <div class="row">
                <div class="col-sm-4">customer A</div>
                <div class="col-sm-4">customer B</div>
                <div class="col-sm-4">customer C</div>
            </div>
    
            
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