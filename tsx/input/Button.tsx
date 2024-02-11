import { board, SerialPort, attachButton } from "edison";
import React from "react";
import { createContext } from "react";

export const ButtonContext = createContext<SerialPort | null>(null);

type ButtonProps = {
  pin: number;
  onPress?: () => void;
  onRelease?: () => void;
  debounceTime?: number;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  pin,
  onPress,
  onRelease,
  debounceTime,
  children,
}) => {
  board.on("ready", (port: SerialPort) => {
    const pushButton = attachButton(port, pin);

    if (onPress) {
      pushButton.read("on", () => {
        onPress();
      });
    }

    if (onRelease) {
      pushButton.read("off", () => {
        onRelease();
      });
    }
  });

  return (
    <ButtonContext.Provider value={null}>{children}</ButtonContext.Provider>
  );
};
