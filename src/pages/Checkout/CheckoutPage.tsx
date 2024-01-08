import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutPage = () => {
  const publishableKey = import.meta.env.VITE_Publishablekey;
  const stripePromise = loadStripe(publishableKey);
  return (
    <div className="mt-20">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
