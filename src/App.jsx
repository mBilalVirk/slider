import { useState } from "react";

import Slider from "./components/Slider";
import "../src/components/Slider.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Slider />
    </>
  );
}

export default App;
