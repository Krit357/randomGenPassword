import { useState } from "react";
import "./App.css";

function App() {
  const [groupText, setGroupText] = useState("");
  const [generate, setGenerate] = useState(false);

  const generateWord = (length) => {
    setGenerate(true);
    setGenerate((previousGenerate) => !previousGenerate);
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

    const characterLength = characters.length;
    while (result.length < length) {
      const randomChar = characters.charAt(
        Math.floor(Math.random() * characterLength)
      );
      if (!result.includes(randomChar)) {
        result += randomChar;
      }
    }
    setGroupText(result);
    setGenerate(false);
  };

  return (
    <div>
      <h2>{generate ? "" : groupText}</h2>
      <button onClick={() => generateWord(5)}>Easy Password</button>
      <button onClick={() => generateWord(10)}>MediumPassword</button>
    </div>
  );
}

export default App;
