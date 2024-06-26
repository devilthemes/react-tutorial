import { createContext } from "react";

// Data Initialization
const SettingContext = createContext();
// Data Provider
const SettingProvider = SettingContext.Provider;
// Data Consumer
// const SettingConsumer = SettingContext.Consumer;

export {SettingProvider,SettingContext};