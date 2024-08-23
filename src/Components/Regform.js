import React from 'react'
import './Regform.css';
import { Navigate } from 'react-router-dom';

export default function Regform() {
  return (
    <div>
      <div class="front">
        <div class="image"></div>
        <div class="form">
            <h2>Registration Form</h2>
            <form action="#" method="post" onSubmit={()=>{Navigate('./login')}}>
               <p>User Name:</p>
               <input type="text" placeholder="  Full Name" required/>
               <p>Email:</p> 
               <input type="text" placeholder="  Email"/>
               <p>Shipping Address:</p>
               <input type="text" placeholder="  Shipping Address" required/>
               <p>Contact No.:</p>
               <input type="text" placeholder="  Contact No." required/>
               <p>Password:</p>
               <input type="password" placeholder="  Password" required/>
               <button type="submit" >Register</button>
            </form>
        </div>
    </div>

    </div>
  )
}
