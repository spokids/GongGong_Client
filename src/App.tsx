import React from "react";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="container max-w-[410px] min-w-[390px] mx-auto flex">
      <Outlet />
    </div>
  );
};

export default App;