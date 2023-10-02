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
import RecipeShared from "./components/recipeshared/RecipeShared";
import Aboutuspage from "./components/Aboutuspage";
import TermsAndCondition from "./components/TermsAndCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DiscountPolicy from "./components/DiscountPolicy";
import RecipeOverview from "./components/RecipeOverview";
import ContentWrapper from "./components/contentwrapper/Contentwrapper";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;



//const [searchValue, setSearchValue] = useState(""); // State to store search bar value

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
                <Route path="/sharing" element={<SharingPage />} />
                <Route path="/recipeShared" element={<RecipeOverview />} />
                <Route path="/About_Us" element={<Aboutuspage />} />
                <Route path="/Careers" element={<Landing />} />
                <Route path="/Td" element={<TermsAndCondition />} />
                <Route path="/PP" element={<PrivacyPolicy />} />
                <Route path="/Dp" element={<DiscountPolicy />} />

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
