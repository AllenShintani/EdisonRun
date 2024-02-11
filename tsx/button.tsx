import React, { useState } from "react";
import { renderToString } from "react-dom/server";
import { FC } from "edison";
import { Button } from "./input/Button";
import { Board } from "./lib/Board";
import { Buzzer } from "./lib/Buzzer";

const Test: FC = () => {
  const [isOn, setIsOn] = useState(true);
  const handleBuzzer = () => {
    console.log("Button is pusshed");
  };

  return (
    <Board port={"/dev/ttyUSB1"}>
      <Button pin={8} onPress={handleBuzzer}>
        <Buzzer pin={13} isOn={isOn} />
      </Button>
    </Board>
  );
};

renderToString(<Test />);
