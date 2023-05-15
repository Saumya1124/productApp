import React, { useState } from "react";
import { Fragment } from "react";
import ProductDetails from "./ProductDetails";
import './ProductForm.css';
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

        setId('');
        setName('');
        setCategory('');
        setPrice('');
    }
    
    const delItem = (event)=> {
        event.preventDefault()
        const data = event.target.id
        console.log(data)

        setDetails(()=> {
            return details.filter(detail => detail.id != data )
        })
        console.log('called')
        
        localStorage.removeItem(data)

    }
    

   
    
    return (
        <div>
            <div className="form">
            <form onSubmit={submitFormHandler}>
                <div>
                      <label>Product ID</label>
                      <input type="text" onChange={updateId} value={id}></input>
                </div>
                <div>
                      <label>Product Name</label>
                      <input type="text" onChange={updateName} value={name}></input>
                </div>
                <div>
                      <label>Choose a category</label>
                      <select onChange={updateCategory} value={category}>
                        <option value='Electric'>Electric</option>
                        <option value='Fashion'>Fashion</option>
                        <option value='SkinCare'>Skin Care</option>
                      </select>
                </div>
                <div>
                      <label>Selling Price</label>
                      <input type="text" onChange={updatePrice} value={price}></input>
                </div>
                <div className="btn">
                    <button>Add Product</button>
                </div>
                
            </form>

            </div>

           

            <ProductDetails details = {details} delItem = {delItem}></ProductDetails>
          
        </div>

    )
}
export default ProductForm