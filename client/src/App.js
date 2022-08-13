import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <Container maxWidth="lg">
      <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_PUBLIC_CLIENT_ID}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Navigate to="/posts" />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id" exact element={<PostDetails />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Container>
  );
}

export default App;
