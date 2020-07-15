import React from 'react'
import './animate.css';
import x from './HomePage/abdallah.jpg'
export default function Animate(props) {
    return(
        <div class="container">
           <img src={x} alt="Avatar"  class="image img-fluid" />
           <div class="middle">
            <div class="text">John Doe</div>
           </div>
        </div>
    )
}

