/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Input, message } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../utils/auth.Services";
import { useCreatePaymentMutation, useCreatepaymentIntentMutation } from "../../redux/api/paymentApi";
import { useGetSingleUserQuery } from "../../redux/api/userApi";
import Loading from "../Shared/loading/Loading";



const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
console.log(error);
  const cart = useAppSelector((state) => state?.cart);
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = Number(cart.total.toFixed(2));
  const user = getUserInfo();
  
//@ts-ignore
  const {data, isLoading} = useGetSingleUserQuery(user?._id)
  const userData = data?.data;
  const [createPaymentMethod] = useCreatepaymentIntentMutation();
  const [createPayment]= useCreatePaymentMutation();

 
  const fatchPaymentIntent = async () => {
    try {
      const res = await createPaymentMethod({ price: totalPrice });
      //@ts-ignore
      const result = res?.data?.data?.clientSecret;
      if (result) {
        setClientSecret(result);
      }
    } catch (error) {
      console.error("Error fetching payment intent:", error);
    }
  };
  // console.log(clientSecret, 'client secret..');

  useEffect(() => {
    if (totalPrice > 0) {
      fatchPaymentIntent();
    }
  }, [totalPrice]);
 


  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!clientSecret) {
      console.error("Client secret is missing.");
      return;
    }

    const card = elements.getElement(CardElement);


    if (!card) {
      console.error("Card element is not available.");
      return;
    } 

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
  })

  if (error) {
      console.error('payment error', error);
      //@ts-ignore
      setError(error.message);
  }
  else {
      console.log('payment method', paymentMethod)
      setError('');
  }


  const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      //@ts-ignore
      card: card,
      billing_details: {
        //@ts-ignore
          email:userData?.email || "anonymous@gmail.com",
          //@ts-ignore
          name: userData?.name || 'anonymous'
      }
  }
  });

  // console.log(paymentIntent, 'paymentIntent');

  if (confirmError) {
      console.log('confirm error', confirmError)
  }
  else {
      console.log('payment intent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        // console.log(paymentIntent.id, 'paymentIntent.id');

          const payment = {
            email: userData?.email,
            userName: userData?.name,
            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date(),
            status: 'pending'
          };

          try {
            const res = await createPayment(payment).unwrap();
            // console.log(res.success);
            if(res?.success === true){
              message.success(res?.message)
            }

          } catch (error) {
            console.error('Error creating payment:', error);
          }
     
      }
  }

  };

console.log(userData, 'userData');

  if(isLoading){
    return <Loading />
  }

  return (
    <form
      className="w-96 mx-auto bg-[#E1F3E4] rounded p-10"
      onSubmit={handleSubmit}
    >
      <p className="text-lg mb-2 text-center -mt-3 text-primary">
        Total : {cart.total.toFixed(2)}
      </p>
      <Input type="email" defaultValue={userData?.email} placeholder="Email" className="mb-3" />
      <Input type="text" defaultValue={userData?.phone} placeholder="Phone Number" className="mb-3" />
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
