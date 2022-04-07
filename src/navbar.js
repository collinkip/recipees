import render from 'dom-serializer';
import React from 'react';


const Navbar=()=>{
    return(
        <div>
            <ul style={{backgroundColor:'brown',listStyle:'none',textAlign:'center',display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <li>Home</li>
                <li>Special Deals</li>
                <li>New products</li>
            </ul>
        </div>
    )
}
export default Navbar;