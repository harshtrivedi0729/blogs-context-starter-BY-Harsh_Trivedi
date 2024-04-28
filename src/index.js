import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // AppContextProvider no childeren a APP che 
  // apde j na upar provider apply karva mangiye chiye tene apde wrap kari deva no context-provider ni sathe
  <AppContextProvider>
    <App />
  </AppContextProvider>
    
  
);
