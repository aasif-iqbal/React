//  it can be written in a single file. Here's a quick breakdown and some improvements/suggestions:


// userContext.js
import { createContext, useContext } from "react";

// Create context (can optionally add a default value or null)
export const UserContext = createContext(null);

// Export the provider directly
export const UserProvider = UserContext.Provider;

// Custom hook to use context
export default function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}


// App.jsx or App.js
/*
import React from "react";
import { UserProvider } from "./userContext";
import Home from "./Home";

const user = { name: "Aasif", role: "admin" };

function App() {
  return (
    <UserProvider value={user}>
      <Home />
    </UserProvider>
  );
}
*/


// Home.jsx
/*
import useUser from "./userContext";

function Home() {
  const user = useUser();
  return <div>Welcome {user.name}!</div>;
}
*/
