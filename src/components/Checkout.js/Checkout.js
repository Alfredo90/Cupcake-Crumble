
import CreditCardForm from "./CreditCardForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import dotenv from "dotenv";

// import OrderSummary from './OrderSummary';
dotenv.config();

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IE0TeH4qIhrbkZqtD8WmhogiCJk7Lc6ugftU5ObI4CH8CBcbTSW81pYXRKxqK7yis5hp4HMbNBUAIcHs70o3MUp00uOUR66c2"
);

const Checkout = () => {
  console.log(dotenv.config())
  return (
    <div>
      <Elements stripe={stripePromise} >
        <CreditCardForm />
      </Elements>
    </div>
  );
};

export default Checkout;
