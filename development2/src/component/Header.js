import React, { Component } from 'react';
import {  MDBRow,MDBCol, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
          isWideEnough: false,

          
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
                    
                    <MDBNavbar color="bg-primary" dark expand="md" fixed="top" >
                        <MDBNavbarBrand href="/">
                        <strong>[Potato Tech Services]</strong>
                        </MDBNavbarBrand>
                        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                            <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                            <MDBNavLink to="/contact">Contact Us</MDBNavLink>
                            </MDBNavItem>
                    
                        </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                    
           
            
        )
    }
}
