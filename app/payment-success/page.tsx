export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="max-w-3xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gray-600">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h2 className="text-2xl">You succesfully sent</h2>

        <div className="bg-white p-5 rounded-md text-gray-600 mt-5 text-4xl font-bold">
          ${amount}
        </div>
      </div>
    </main>
  );
}
