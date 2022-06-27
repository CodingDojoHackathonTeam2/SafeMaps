import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": "test",
  currency: "USD",
  intent: "capture",
  "data-client-token": "abc123xyz==",
};

export default function Paypal({ visible, onClose }) {
  const handleOnClose = () => {
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-10 rounded">
        <h1 className="font-bold mb-3">
          Donate and be a part of a more secure future for ukranians.
        </h1>
        <PayPalScriptProvider options={{ initialOptions }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "1.99",
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                alert(`Transaction completed by ${name}`);
              });
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}
