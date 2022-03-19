import React from 'react';
import CartSummury from '../cart/CartSummury';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{fontStyle:'italic',fontFamily:'arial'}}>
        <Navbar color="gray" light expand="md"  style={{backgroundColor:'#007bff',marginTop:'10px',borderRadius:'10px'}}>
        <Link to="/" style={{textDecoration:'none'}}><NavbarBrand  style={{color:'white'}}>Anasayfa </NavbarBrand></Link>
        <Link to="/cart" style={{textDecoration:'none'}}><NavbarBrand  style={{color:'white'}}>Sepet </NavbarBrand></Link>
        <Link to="/product" style={{textDecoration:'none'}}><NavbarBrand  style={{color:'white'}}>Ürünler </NavbarBrand></Link>
          
          
        <Link to="/hakkimizda" style={{textDecoration:'none'}}><NavbarBrand  style={{color:'white'}}>Hakkımızda </NavbarBrand></Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar style={{marginLeft:'300px'}}>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink href="/components/" style={{color:'white'}}>Ürün Ekle</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" style={{color:'white'}}>Profil</NavLink>
              </NavItem>
              <CartSummury />
           
            </Nav>
          </Collapse>
        </Navbar>
        <hr style={{marginBottom:'50px',}}/>
      </div>
      
    );
  }
}