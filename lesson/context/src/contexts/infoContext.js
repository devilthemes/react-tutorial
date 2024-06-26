import { createContext } from "react";

// Data Initialization
const InfoContext = createContext();
// Data Provider
const InfoProvider = InfoContext.Provider;
// Data Consumer
const InfoConsumer = InfoContext.Consumer;

export {InfoProvider,InfoConsumer};