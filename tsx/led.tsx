import React, { useState } from "react";
import { renderToString } from "react-dom/server";
import { Board, Led } from "edison";

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  if (!isOn) {
    setIsOn(true);
  }
  return (
    <Board port={"/dev/ttyUSB0"}>
      <Led pin={13} isOn={isOn} />
    </Board>
  );
};

renderToString(<App />);
