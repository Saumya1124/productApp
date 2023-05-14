const ProductDetails = (props)=> {


   
    return(
        <div>
          
        
          
                {props.category === 'Electric' &&
                    
                    <div id = {props.id}>
                        <h3>{props.name}, {props.price} </h3>
                        <button onClick={props.delItem} id = {props.id}>Delete</button>
                    </div>
                    
                    
                }
          
          
            

           {props.category === 'Fashion' &&
               
               <h3>{props.name}, {props.price}</h3>
           } 

           {props.category === 'SkinCare' &&
               
               <h3>{props.name}, {props.price}</h3>
           } 


              
        </div>
    )
}
export default ProductDetails