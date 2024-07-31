import { NextRequest, NextResponse } from "next/server";

// a linha está criando uma instância do objeto stripe, configurada com uma chave secreta. essa chave é usada para autenticar e autorizar todas as requisições feitas à api do stripe.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    // assuming that the user passes an amount inside of the post body
    const { amount } = request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currendy: "usd",
      automatic_payment_methods: { enable: true },
    });

    // send back a response with the client secret
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);

    // handle other errors (e.g. network issues, parsing errors)
    return NextResponse.json(
      { error: `Interal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
