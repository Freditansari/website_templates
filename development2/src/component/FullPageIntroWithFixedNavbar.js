import React from 'react';
import {  MDBRow,MDBCol, MDBBtn, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import {MDBCard, MDBCardBody} from 'mdbreact';
import {MDBAnimation} from 'mdbreact';
import {MDBJumbotron, MDBIcon} from 'mdbreact'
import {MDBCardText, MDBCarouselItem, MDBCardImage, MDBCardTitle, MDBCarousel, MDBCarouselInner} from 'mdbreact';


import businessTeamMeeting from './images/business-team-meeting-boardroom.jpg';
import javascriptCode from './images/finger-pointing-at-javascript-code.jpg';
import mernStack from './images/mern-stack-logo.jpg';
import WOW from "wow.js";
import './FullPageIntroWithFixedNavbar.css'




class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      
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
    
    return (
    <div>

      <MDBRow className="d-flex justify-content-center">
        <MDBCol >
          <MDBJumbotron style={{ padding: 0}}>
         
            <MDBRow className="text-white text-center py-5 px-4 my-5 muted" style={{ 
               backgroundColor: 'black' , 
               backgroundImage: `url(${javascriptCode})`,
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat', 
              
              }}>

              <MDBRow className="py-5 mx-auto">
              <MDBCol >
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Design, Build, Support Websites, Portals and Applications</MDBCardTitle>
                <p className="mx-5 mb-5">We believe that IT infrastructure is a backbone of a modern enterprise companies. 
                 But deploying IT to benefit your business is difficult, this is where we comes into your service.  
                </p>

         
              </MDBCol>

              
              </MDBRow>

              <MDBContainer>
                <MDBCardBody className="transparent-card">
                <MDBRow className="mx-5 mx-auto" >
                
                <MDBCol>
                  <MDBRow><MDBCol md="6"><i className="fas fa-tape fa-3x"></i></MDBCol></MDBRow>
                  <MDBRow><MDBCol md="6">Design and build Web Applications</MDBCol></MDBRow>
                </MDBCol>
                <MDBCol>
                  <MDBRow><MDBCol md="6"><i className="fas fa-building fa-3x"></i></MDBCol></MDBRow>
                  <MDBRow><MDBCol md="6">Maintain and support existing infrastructure</MDBCol></MDBRow>
                </MDBCol>
                <MDBCol>
                  <MDBRow> <MDBCol md="6"><i className="fas fa-plug fa-3x"></i></MDBCol></MDBRow>
                  <MDBRow> <MDBCol md="6">Connect legacy applications to a newer infrastructures</MDBCol></MDBRow>
                </MDBCol>
            
              
            </MDBRow>

              </MDBCardBody>
              </MDBContainer>
             
          
              
            </MDBRow>
            
             
   
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>

    
       

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
                          <MDBCardImage className="img-fluid img-thumbnail" src="http://www.riter-induction.com/wp-content/uploads/2015/03/co-logo-boeing.png" />
                          <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText>
                      
                            </MDBCardText>
                          
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4" className="clearfix d-none d-md-block">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid img-thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bank_of_America_logo.svg/1920px-Bank_of_America_logo.svg.png" />
                          <MDBCardBody>
                            <MDBCardTitle>MDBCard title</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </MDBCardText>
                          
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4" className="clearfix d-none d-md-block">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/1024px-Goldman_Sachs.svg.png" />
                          <MDBCardBody>
                            <MDBCardTitle>MDBCard title</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </MDBCardText>
                          
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBCol md="4">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Allstate_logo.svg/1920px-Allstate_logo.svg.png" />
                          <MDBCardBody>
                            <MDBCardTitle>MDBCard title</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </MDBCardText>
                          
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

              <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4"><img src={mernStack} className="img-fluid" alt="" /> </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-4"></div>
                <div className="col-sm-4"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/368px-Spring_Framework_Logo_2018.svg.png" className="img-fluid" alt="" /> </div>
                <div className="col-sm-4"></div>
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