import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

const RootRoute = () => {
  return (
    <div className="content">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default RootRoute;
