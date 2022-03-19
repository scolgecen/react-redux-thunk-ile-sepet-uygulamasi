import React, { Component } from 'react'
import { connect } from 'react-redux';
import alertify from "alertifyjs"
import * as cartActions from "../../redux/actions/cartActions";

import {

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,NavItem,NavLink, Badge, Row, Col,Button} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class CartSummury extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(`<i class="fa fa-check" aria-hidden="true"></i>`+"&nbsp;"+product.productName + " sepetten silindi")
      }
  
    renderEmpty(){
        return(
            <NavItem >
            <NavLink href="/components/" style={{color:'white'}}>Sepet Boş</NavLink>
          </NavItem>
        )
    }
    renderSummery(){
        return(
            <UncontrolledDropdown nav inNavbar style={{width:'150px'}} >
                <DropdownToggle nav caret  style={{color:'white',width:'150px'}}>
                 Sepetiniz
                </DropdownToggle>
                <DropdownMenu right style={{minWidth:'450px'}} >

                {this.props.cart.map((cartItem,index)=>(
                  <DropdownItem key={cartItem.product.id}>
                    <Row>
                        <Col xs="9">
                        {cartItem.product.productName} 
                        </Col>
                        <Col xs="1">
                        <Badge color="info">{cartItem.quantity}</Badge>  
                        </Col>
                        <Col xs="2">
                        <Button onClick={() => this.removeFromCart(cartItem.product)}  className='btn btn-sm btn-danger'>Sil</Button>
                        </Col>

                    </Row>
                  </DropdownItem>
                 ))
                }
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/cart">Sepete Git</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
        )
    }
  render() {
    return (
      <div>
        
        {this.props.cart.length>0?this.renderSummery():this.renderEmpty()}     

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: {
        removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
      }
    };
  }
  function mapStateToProps(state) {
    return {
      cart: state.cartReducer
    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartSummury);
  