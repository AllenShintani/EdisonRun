import React, { createContext } from "react";
import type { SerialPort } from "serialport";
import { board } from "../utils/board";

export const BoardContext = createContext<SerialPort | null>(null);

interface BoardProps {
  children: React.ReactNode;
  // onReady: (port: SerialPort) => void /* こういう風に書くと引数増やせる */
}

export const Board: React.FC<BoardProps> = ({ children }) => {
  board.connectManual("/dev/ttyUSB0");
  console.log(2);
  return <BoardContext.Provider value={null}>{children}</BoardContext.Provider>;
};
