import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table,Button } from 'reactstrap';
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"
class ProductList extends Component {
  componentDidMount(){
    this.props.actions.getProducts()
  }

  addToCart =(product)=>{
    console.log(product)
    this.props.actions.addToCart({quantity:1,product})
    alertify.success(`<i class="fa fa-shopping-basket"></i>`+" &nbsp;&nbsp;"+product.productName +" Sepete Eklendi.")
  }

  render() {
    return (
      <div className='mt-2'>
          <h6 className='text-center mt-3 text-white bg-primary p-3' 
          style={{fontStyle:'',fontFamily:'calibri',fontWeight:'bold',borderRadius:'5px'}}>
                <span className='text-warning'>Ürünler</span> &nbsp;&nbsp; / &nbsp;&nbsp; <span className='text-white'>{this.props.currentCategory.categoryName} </span>
               
            
          </h6>

          
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
        {this.props.products.map((product,index)=>(
          <tr style={{color:'black',fontWeight:'',fontFamily:'arial'}}>
            <td>{index+1}</td>
            <td> {product.productName}</td>
            <td>{product.unitPrice}</td>
            <td>{product.unitsInStock}</td>
            <td>{product.quantityPerUnit}</td>
            <td><Button onClick={()=>this.addToCart(product)} className='btn btn-success btn-sm'>
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Sepete Ekle
              </Button>
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

function mapStateToProps(state){
  return {
    currentCategory:state.changeCategoryReducer,
    products:state.productListReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts,dispatch),
      addToCart:bindActionCreators(cartActions.addToCart,dispatch)
     
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);