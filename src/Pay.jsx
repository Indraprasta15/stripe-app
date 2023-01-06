import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Pay.css";

const KEY = "pk_test_51Ldu2fDQIjmDqWjSCx7PJuhJUIQl1KtdQDDuwRbhaDFwTvfegiyfjYCII4OKSkKxJ92XFFGgnmaEIO41uE3qNv8f00dM3qBzjf";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/checkout/payment", 
        {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        console.log(res.data);
        navigate("/success");
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    >
      {stripeToken ? (<span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout 
        name="INDA SHOP" 
        image="https://images.pexels.com/photos/1339366/pexels-photo-1339366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey= {KEY}
        >
          <button className="button">Pay</button>
      </StripeCheckout>
    )}
    </div>
  )
};

export default Pay;