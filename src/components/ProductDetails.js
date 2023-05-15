import './ProductDetails.css';

const ProductDetails = (props)=> {

    return(
        <div className="products">

            <div>
                <h3>Electric Items</h3>
                {props.details.map((detail)=>{
                    return detail.category === 'Electric' && 
                            <div className='data'>
                                <h4>{detail.name} -- {detail.price} </h4>
                                <div className='btn1'>
                                     <button onClick={props.delItem} id = {detail.id}>Delete</button>
                                </div>                               
                            </div>            
                })}
            </div>

            
            <div>
                <h3>Fashion Items</h3>
                {props.details.map((detail)=>{
                    return detail.category === 'Fashion' && 
                            <div>
                                <h4>{detail.name} -- {detail.price} </h4>
                                <button onClick={props.delItem} id = {detail.id}>Delete</button>
                            </div>              
                })}
            </div>

            <div>
                <h3>SkinCare Items</h3>
                {props.details.map((detail)=>{
                    return detail.category === 'SkinCare' && 
                    <div>
                        <h4>{detail.name} -- {detail.price} </h4>
                        <button onClick={props.delItem} id = {detail.id}>Delete</button>
                    </div>                                     
                })}
            </div>

              
        </div>
    )
}
export default ProductDetails