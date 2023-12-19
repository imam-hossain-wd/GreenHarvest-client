/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Input, message } from "antd";
import { useAppSelector } from "../../redux/hooks";


const CheckoutForm = () => {
    const cart = useAppSelector((state) => state?.cart);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    message.success("Payment Complete")

    if (error) {
        message.error(error.message)
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form className="w-96 mx-auto bg-[#E1F3E4] rounded p-10" onSubmit={handleSubmit}>
        <p className="text-lg mb-2 text-center -mt-3 text-primary">Total : {cart.total.toFixed(2)}</p>
         <Input type="email" placeholder="Email" className="mb-3" />
      <Input type="text" placeholder="Phone Number" className="mb-3" />
      <Input type="text" placeholder="Address" className="mb-3" />
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <Button
        htmlType="submit"
        disabled={!stripe}
        className="bg-primary mt-4 hover:bg-white hover:text-primary hover:border-primary hover:border text-lg text-white w-full h-10 flex justify-center items-center rounded-lg "
      >
        Pay ${cart.total.toFixed(2)}
      </Button>
    </form>
  );
};

export default CheckoutForm;
