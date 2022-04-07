import React from 'react'

const Product=({title,image,category})=>{

    return(
        
        <div className='products'>
            <h2>{title}</h2>
        <p>
            {category}
        </p>
        <img src={image}/>
        </div>

    )
    
}
export default Product;