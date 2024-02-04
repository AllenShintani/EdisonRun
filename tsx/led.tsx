import { App } from "edison";
import { renderToString } from "react-dom/server";
import React from "react";

console.log("Test App is running!");

const runTest = async () => {
  try {
    const renderedApp = renderToString(<App />);
  } catch (error) {
    console.error("Failed to connect to the board:", error);
  }
};

runTest();
