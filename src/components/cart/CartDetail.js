import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table,Button } from 'reactstrap';
import alertify from "alertifyjs"
import * as cartActions from "../../redux/actions/cartActions";

class CartDetail extends Component {

    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(`<i class="fa fa-check" aria-hidden="true"></i>`+"&nbsp;"+product.productName + " sepetten silindi")
      }
  render() {
    return (
      <div>

<Table className='mt-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Ürün Adı</th>
            <th>Ürün Fiyatı</th>
            <th>Ürün Stok</th>
            <th>Ürün Özellik</th>
            
          </tr>
        </thead>
        <tbody>
        {this.props.cart.map((cartItem,index)=>(
          <tr style={{color:'black',fontWeight:'',fontFamily:'arial'}}>
            <td>{index+1}</td>
            <td> {cartItem.product.productName}</td>
            <td>{cartItem.product.unitPrice}</td>
            <td>{cartItem.product.unitsInStock}</td>
            <td>{cartItem.product.quantityPerUnit}</td>
            <td>
              <Button onClick={() => this.removeFromCart(cartItem.product)}
                className='btn btn-sm btn-danger'>Sil</Button>
            </td>
            
          </tr>
            ))
          }
         
        </tbody>
      </Table>


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
  )(CartDetail);
  