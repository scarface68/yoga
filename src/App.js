import { useState } from "react";
import Form from "./components/Form";
import Payment from "./components/Payment";

function App() {
  const [userRegistered, setUserRegistered] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="text-6xl m-4 italic text-custom-green font-Baskerville">
        <strong>Flexyoga</strong>
      </div>
      {!userRegistered ? (
        <Form setUserRegistered={setUserRegistered} />
      ) : (
        <Payment />
      )}
    </div>
  );
}

export default App;
