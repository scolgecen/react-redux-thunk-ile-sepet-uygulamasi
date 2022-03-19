import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { bindActionCreators } from 'redux'
//import { getCategories } from '../../redux/actions/categoryActions'
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
 class CategoryList extends Component {
   componentDidMount(){
     this.props.actions.getCategories()
   }
   selectCategory = (category) =>{
    this.props.actions.changeCategory(category)
    this.props.actions.getProducts(category.id)

   }
  render() {
    return (

      <div className='mt-2'>
          <h5 className='text-center mt-3 text-white bg-primary p-3' style={{fontStyle:'',fontFamily:'calibri',fontWeight:'bold',borderRadius:'5px'}}>
       KATEGORİLER
        </h5>
          <ListGroup>
            {
              this.props.categories.map(category=>(
                <ListGroupItem 
                onClick={()=>this.selectCategory(category)} 
                key={category.id} 
                style={{cursor:'pointer'}} 
                active={category.id===this.props.currentCategory.id}>
                  {category.categoryName}
                </ListGroupItem>
              ))
            }
          </ListGroup>
     {/**
       <h6 className='text-center mt-3 text-white bg-primary p-3' style={{borderRadius:'5px'}}>
       - {this.props.currentCategory.categoryName}
        </h6>
      * 
      */}
      </div>
    )
  }
}


function mapStateToProps(state){

    return {
      currentCategory:state.changeCategoryReducer,
      categories:state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch){
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(
        productActions.getProducts,
        dispatch
      ),
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)