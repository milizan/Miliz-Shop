import React from 'react';
import AuthForm from '../components/AuthForm';

export function Checkout() {
    // Sign up with correct username and password

 
    return (
        <div>
           <h1>Checkout</h1>
           <h2>Please login or register to continue</h2>
            <AuthForm buttonText="login" token={""} />
            <AuthForm buttonText="register" token={""} />
        </div>
    ) 
 
}


