import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from the correct path
import App from "./App"; // Replace with the path to your main component
import { RecipeProvider } from "./RecipeContext"; // Adjust the path

const rootElement = document.getElementById("root");

const appWithProvider = (
  <React.StrictMode>
    <RecipeProvider>
      <App /> {/* Replace with your main component */}
    </RecipeProvider>
  </React.StrictMode>
);

const root = createRoot(rootElement);
root.render(appWithProvider);
