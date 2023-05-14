import React, { useState } from "react";
import { Fragment } from "react";
import ProductDetails from "./ProductDetails";
const ProductForm = ()=> {

    const [id , setId] = useState('')
    const [name , setName] = useState('')
    const [category , setCategory] = useState('')
    const [price , setPrice] = useState('')
    const [details , setDetails] = useState([])

    const updateId = (event)=> {
        setId(event.target.value)
    }
    const updateName = (event)=> {
        setName(event.target.value)
    }
    const updateCategory = (event)=> {
        setCategory(event.target.value)
    }
    const updatePrice = (event)=> {
        setPrice(event.target.value)
    }

    const submitFormHandler = (e)=> {
        e.preventDefault()
        setDetails([{id : id , name : name , category : category , price : price}, ...details])
        console.log(details)
        localStorage.setItem(id,[name , category , price])
    }
    
    const delItem = (event)=> {
        event.preventDefault()
        const data = event.target.id
        console.log(id)
        
        localStorage.removeItem(id)

    }
    

   
    
    return (
        <div>
            <form onSubmit={submitFormHandler}>
                <div>
                      <label>Product ID</label>
                      <input type="text" onChange={updateId}></input>
                </div>
                <div>
                      <label>Product Name</label>
                      <input type="text" onChange={updateName}></input>
                </div>
                <div>
                      <label>Choose a category</label>
                      <input type="text" onChange={updateCategory}></input>
                </div>
                <div>
                      <label>Selling Price</label>
                      <input type="text" onChange={updatePrice}></input>
                </div>
                <button>Add Product</button>
            </form>

           

            {details.map((detail) => 
              <ProductDetails 
                 key = {detail.id}
                 name = {detail.name}
                 category = {detail.category}
                 price = {detail.price}
                 delItem = {delItem}
              />

            )}

           


    
            
        </div>

    )
}
export default ProductForm