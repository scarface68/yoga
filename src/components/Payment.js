// Import necessary dependencies
import React, { useState } from "react";
import Loader from "./Loader";
import api from "../api/axios";

// Define the Payment component
const Payment = () => {
  // State to track the payment confirmation, checkbox status, and loader visibility
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle payment confirmation
  const handleConfirmation = () => {
    // Show the loader
    setIsLoading(true);
    api
      .post("/payment")
      .then(() => console.log("success"))
      .catch(() => console.log("error"));
    // Delay the confirmation message for 5 seconds
    setTimeout(() => {
      setIsConfirmed(true);
      setIsLoading(false);
    }, 5000);
  };

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {isConfirmed ? (
        <div
          className="m-4 p-4 bg-green-500 rounded-lg shadow-lg text-6xl font-Baskerville text-white"
          style={{ textAlign: "center", width: "50%" }}
        >
          Payment confirmed! You can join the classes from tomorrow.
        </div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <div
          className="p-4 m-2 bg-white rounded-lg shadow-lg"
          style={{ width: "75%" }}
        >
          <h2 className="text-2xl font-bold mb-4">Complete Payment</h2>
          <p>
            Please read and accept the terms and conditions before proceeding
            with the payment:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Each individual will have to pay the fees every month and they can
              pay it at any time during the month.
            </li>
            <li>
              The participants can choose any batch in a month and can move to
              any other batch next month. I.e. participants can shift from one
              batch to another in different months but in the same month they
              need to be in the same batch.
            </li>
            <li>
              You can enroll any day but you will have to pay for the entire
              month. The monthly fee is 500/- Rs INR.
            </li>
          </ul>

          <div>
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms" className="text-sm">
              I accept the terms and conditions
            </label>
            <br />
            <button
              onClick={handleConfirmation}
              className={`bg-custom-green ${
                isChecked ? "hover:bg-green-700" : ""
              } text-white font-bold py-2 px-4 rounded mt-4`}
              disabled={!isChecked}
            >
              {"Pay \u20B9500/-"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Payment;
