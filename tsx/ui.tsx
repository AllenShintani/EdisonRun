// App.tsx

import { Board, LED } from "edison";
import React from "react";

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  console.log(3);

  return (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    <Board onReady={(port) => console.log("Board is ready!")}>
      <LED pin={13} isOn={true} />
    </Board>
  );
};

export { App };
