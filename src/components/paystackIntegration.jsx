import React from 'react';
import PaystackPop from '@paystack/inline-js'

export const PaystackIntegration = () => {

    const paystack = new PaystackPop();
    paystack.newTransaction({
        key: "pk_test_abcfefe9fdc9e5d5a70d2ad0bee3fe2390ce12dd",
        amount: amount,
        email,
        firstname,
        lastname
    });
  return (
    <div>PaystackIntegration</div>
  )
}

