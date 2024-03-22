import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import ContextProviders from "./components/shared/ContextProviders";
import AppLayout from "./components/shared/AppLayout";

function App() {
  return (
    <ContextProviders>
      <AppLayout>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </main>
      </AppLayout>
    </ContextProviders>
  );
}

export default App;
