import { Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route } from "react-router-dom";
import PagenotFound from "screens/404";
import Navbar from "./components/Navbar";
import AppContextProvider from "./contexts/AppContext";
import Details from "./screens/Details";
import Home from "./screens/Home";
import { customTheme } from "./styles/theme";

function App() {
 const queryClient = new QueryClient({
  defaultOptions: {
   queries: {
    retry: 0,
   },
  },
 });
 return (
  <QueryClientProvider client={queryClient}>
   <AppContextProvider>
    <ThemeProvider theme={customTheme}>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:countryName" element={<Details />} />
      <Route
       path="*"
       element={
        <PagenotFound />
       }
      />
     </Routes>
    </ThemeProvider>
   </AppContextProvider>
  </QueryClientProvider>
 );
}

export default App;
