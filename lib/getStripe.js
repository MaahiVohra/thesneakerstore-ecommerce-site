import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(
			"pk_test_51Nkhj3SIm2iEvVrkTooJXGIyB4pfnjuk9yENd5LDk7pAQFZaJpN3zljtMD4hWi599fU6TKLck3DrjKEDZc3W7SdE00wPBDrsOX"
		);
	}

	return stripePromise;
};

export default getStripe;
