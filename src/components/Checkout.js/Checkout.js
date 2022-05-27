import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

export default function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  console.log(stripe);
  console.log(elements);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await stripe.confirmCardPayment({
      elements,
      confirmParams: {
        return_url: 'https://localhost:3000'
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <CardElement />
      <button disabled={!stripe || !elements}>Submit</button>
    </form>
  );
}
