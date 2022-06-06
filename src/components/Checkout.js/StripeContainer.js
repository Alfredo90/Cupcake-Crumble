import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Checkout from "./Checkout"


// const PUBLIC_KEY = "pk_test_rgWMA3zxjAtwaB6iV8b5W40x"

const stripeTestPromise = loadStripe("pk_test_rgWMA3zxjAtwaB6iV8b5W40x")

 function StripeContainer() {
	const options = {
		clientSecret:'{{CLIENT_SECRET}}',
	}
	console.log("OPTIONS", options )
	return (
		<Elements stripe={stripeTestPromise} options={options} >
			<Checkout />
		</Elements>
	)
}
export default StripeContainer