import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AppContextProviders from "./context/AppContextProviders";
import AppLayout from "./components/shared/AppLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AppContextProviders>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </AppContextProviders>
  );
}

export default App;
