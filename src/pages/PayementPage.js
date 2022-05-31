import React from "react";
import Header from "../components/Header";
import Payment from "../components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51L3L6SH1i5pLEFKChtTzpj49iCm5MZFwC6LxFrJEcXIGrgFHeyViinbMw6prpIl0EFNbWqMbwtOHWWvlhduFm8ct00BO15PcoP"
);

function PayementPage() {
  return (
    <div>
      <Header />
      <Elements stripe={promise}><Payment /></Elements>
      
    </div>
  );
}

export default PayementPage;
