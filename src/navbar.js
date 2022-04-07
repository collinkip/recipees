import render from 'dom-serializer';
import React from 'react';


const Navbar=()=>{
    return(
        <div>
            <ul className='navlinks'>
                <li>Home</li>
                <li>Special Deals</li>
                <li>New products</li>
            </ul>
        </div>
    )
}
export default Navbar;