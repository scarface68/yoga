import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [showModal, setShowModal] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  const age = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    const m = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setDob("");
    setSelectedBatch("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const Age = age(dob);
    if (Age < 18 || Age > 65) {
      setShowModal(true);
      return;
    }
    // Reset form values
    resetForm();
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white shadow-lg rounded px-8 py-4">
            <p className="text-red-500">
              Only people within the age limit of 18-65 can enroll for the
              monthly classes
            </p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setShowModal(false);
                resetForm();
              }} // Close the modal when the button is clicked
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className={`max-w-md mx-auto ${showModal ? "opacity-50" : ""}`}>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dob"
            >
              Date of Birth<span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              type="date"
              value={dob}
              onChange={handleDobChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="batch"
            >
              Select Batch<span className="text-red-500">*</span>
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="batch"
              value={selectedBatch}
              onChange={handleBatchChange}
              required
            >
              <option value="">Select a batch</option>
              <option value="6-7AM">6-7AM</option>
              <option value="7-8AM">7-8AM</option>
              <option value="8-9AM">8-9AM</option>
              <option value="5-6PM">5-6PM</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
