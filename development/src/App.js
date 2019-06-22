import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
MDBCol, MDBIcon,
MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody,MDBCardImage, MDBCardTitle, MDBCardText, MDBAnimation
} from "mdbreact";
import "./index.css";



function App(){


 
  return (
    

    <MDBAnimation type="wow slideInLeft">
            <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBAnimation>
  );
}
export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBCardImage, MDBCardTitle,MDBCardText } from "mdbreact";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//        <MDBCol>
//       <MDBCard style={{ width: "22rem" }}>
//         <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
//         <MDBCardBody>
//           <MDBCardTitle>Card title</MDBCardTitle>
//           <MDBCardText>
//             Some quick example text to build on the card title and make
//             up the bulk of the card&apos;s content.
//           </MDBCardText>
//           <MDBBtn href="#">MDBBtn</MDBBtn>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>
//       </header>
//     </div>
//   );
// }

// export default App;
