"use client";

// components
import CheckoutPage from "@/components/CheckoutPage";

// stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// helper function
import convertToSubcurrency from "@/lib/convertToSubcurrency";

// making sure public key is not undefined
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY == undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const amount = 49.99;

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gray-600">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Tea</h1>
        <h2 className="text-2xl">
          has requested <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      {/* implement Stripe payment element */}
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          // amount option is expected in subcurrency, for dollars = cents
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}
