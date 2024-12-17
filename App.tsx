import React from "react";
import "./global.css"
import AppNavigation from "./navigation/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return <>
  <Provider store={store}>
  <AppNavigation />
  </Provider>
  </>
}