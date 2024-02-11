import React, { useState } from "react";
import { renderToString } from "react-dom/server";
import { Board, Buzzer } from "edison";

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Board port={"/dev/ttyUSB0"}>
      <Buzzer pin={8} isOn={isOn} />
    </Board>
  );
};

renderToString(<App />);
