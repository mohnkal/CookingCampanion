import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import { RecipeProvider } from "./RecipeContext";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharingPage from "./components/Sharingpage";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <BrowserRouter>
      <ClerkProvider publishableKey={clerkPubKey}>
        <RecipeProvider>
          <div className="App">
            <Navbar />
            <SignedIn>
              <Routes>
                <Route path="/" element={<Landing />} />
                {/* <Route path="/" element={<SharingPage />} /> */}
                
              </Routes>
              <Footer />
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </div>
        </RecipeProvider>
      </ClerkProvider>
    </BrowserRouter>
  );
}

export default App;
