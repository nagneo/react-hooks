import React, { useState, useEffect } from "react";
import { useTitle } from "./useTitle";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
