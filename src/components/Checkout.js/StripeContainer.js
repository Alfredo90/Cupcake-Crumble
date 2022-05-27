import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import Checkout from "./Checkout"


const PUBLIC_KEY = "pk_test_rgWMA3zxjAtwaB6iV8b5W40x"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	const options = {
		clientSecret:process.env.STRIPE_KEY
	}
	console.log("OPTIONS", options )
	return (
		<Elements stripe={stripeTestPromise} options={options} >
			<Checkout />
		</Elements>
	)
}