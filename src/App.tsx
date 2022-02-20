import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppContextProvider from "./contexts/AppContext";
import Details from "./screens/Details";
import Home from "./screens/Home";
import { customTheme } from "./styles/theme";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <ThemeProvider theme={customTheme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryName" element={<Details />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </ThemeProvider>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
