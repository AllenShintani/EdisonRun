import { SerialPort, board } from "edison";
import React, { createContext } from "react";

export const BoardContext = createContext<SerialPort | null>(null);

type BoardProps = {
  children: React.ReactNode;
  port: string;
  // onReady: (port: SerialPort) => void /* こういう風に書くと引数増やせる */
};

export const Board: React.FC<BoardProps> = ({ children, port }) => {
  board.connectManual(port);
  return <BoardContext.Provider value={null}>{children}</BoardContext.Provider>;
};
