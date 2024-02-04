import React from "react";
import { Board } from "./Board";
import { LED } from "./LedComponent";

const App: React.FC = () => {
  console.log(1);
  //led.tsxを実行したら動作するのであれば、Edisonのコマンドを作成し、edison run App.tsxのように行った時、現在のところのled.tsxファイルの実行が行われ、動作するようにする
  return (
    <Board>
      <LED pin={13} isOn={true} />
    </Board>
  );
};

export { App };
