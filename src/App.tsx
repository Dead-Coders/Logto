import "./App.css";
import { LogtoProvider, LogtoConfig } from "@logto/react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Callback from "./Callback";

function App() {

  // this is important to use logto in our react and other frameworks donot use vite because vite is not suppported logto auth
  const config: LogtoConfig = {
    endpoint: "https://0simm1.logto.app/",
    appId: "69ph5k4ahiq12okuqwo8v",
  }

  return (
    <BrowserRouter>
      <LogtoProvider config={config}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </LogtoProvider>
    </BrowserRouter>
  );
}

export default App;
